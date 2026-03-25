import type { Major, Semester, CompletedCourse, GraduationStatus } from "@/types";
import { COURSES } from "@/data/courses";

export function computeProgress(
  major: Major,
  semesters: Semester[],
  completedCourses: CompletedCourse[]
): {
  overall: number;
  byCategory: Record<string, { completed: number; required: number; label: string }>;
} {
  const completedIds = new Set(completedCourses.map((c) => c.courseId));
  const allPlacedIds = new Set(semesters.flatMap((s) => s.courseIds));

  const byCategory: Record<string, { completed: number; required: number; label: string }> = {};
  let totalPlacedCredits = 0;

  for (const group of major.requirements) {
    let groupCredits = 0;

    if (group.type === "elective" && group.electiveOptions && group.electivesNeeded) {
      // For electives: count placed electives up to electivesNeeded
      const placedElectives = group.electiveOptions.filter((id) => allPlacedIds.has(id));
      const counted = placedElectives.slice(0, group.electivesNeeded);
      groupCredits = counted.reduce((sum, id) => sum + (COURSES[id]?.credits ?? 0), 0);
    } else {
      // For required groups: count all placed required courses
      for (const courseId of group.requiredCourseIds) {
        if (allPlacedIds.has(courseId) || completedIds.has(courseId)) {
          groupCredits += COURSES[courseId]?.credits ?? 0;
        }
      }
    }

    totalPlacedCredits += groupCredits;
    byCategory[group.id] = {
      completed: groupCredits,
      required: group.creditsRequired,
      label: group.name,
    };
  }

  const overall = major.totalCreditsRequired > 0
    ? Math.round((totalPlacedCredits / major.totalCreditsRequired) * 100)
    : 0;

  return { overall: Math.min(overall, 100), byCategory };
}

export function computeGraduationStatus(
  major: Major,
  semesters: Semester[],
  completedCourses: CompletedCourse[]
): GraduationStatus {
  const completedIds = new Set(completedCourses.map((c) => c.courseId));
  const allPlacedIds = new Set(semesters.flatMap((s) => s.courseIds));
  const hasPlannedCourses = semesters.some((s) => !s.isCompleted && s.courseIds.length > 0);

  if (!hasPlannedCourses && completedCourses.length > 0) {
    // Only completed courses, nothing planned
    // Check if all requirements are met by completed courses alone
    const allMet = major.requirements.every((group) => {
      if (group.type === "elective" && group.electiveOptions && group.electivesNeeded) {
        const count = group.electiveOptions.filter((id) => completedIds.has(id)).length;
        return count >= group.electivesNeeded;
      }
      return group.requiredCourseIds.every((id) => completedIds.has(id));
    });
    return allMet ? "on-track" : "incomplete";
  }

  // Check if all requirements are satisfied by placed + completed courses
  const allSatisfied = major.requirements.every((group) => {
    if (group.type === "elective" && group.electiveOptions && group.electivesNeeded) {
      const count = group.electiveOptions.filter(
        (id) => allPlacedIds.has(id) || completedIds.has(id)
      ).length;
      return count >= group.electivesNeeded;
    }
    return group.requiredCourseIds.every(
      (id) => allPlacedIds.has(id) || completedIds.has(id)
    );
  });

  return allSatisfied ? "on-track" : "missing";
}
