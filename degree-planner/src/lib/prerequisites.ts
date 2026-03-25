import type { Semester, CompletedCourse, Course } from "@/types";

const TERM_ORDER: Record<string, number> = { Fall: 0, Winter: 1, Spring: 2 };

function semesterSortKey(s: Semester): number {
  return s.year * 10 + TERM_ORDER[s.term];
}

export function validatePrerequisites(
  semesters: Semester[],
  completedCourses: CompletedCourse[],
  courses: Record<string, Course>
): Map<string, string[]> {
  const warnings = new Map<string, string[]>();
  const sorted = [...semesters].sort((a, b) => semesterSortKey(a) - semesterSortKey(b));

  // Build a set of course IDs available before each semester
  const completedIds = new Set(completedCourses.map((c) => c.courseId));

  for (let i = 0; i < sorted.length; i++) {
    const semester = sorted[i];

    // Courses available before this semester = completed + all courses in prior semesters
    const availableBefore = new Set(completedIds);
    for (let j = 0; j < i; j++) {
      for (const cid of sorted[j].courseIds) {
        availableBefore.add(cid);
      }
    }
    // Remove current semester courses (same-semester doesn't count)
    // They're not in availableBefore since we only iterated j < i

    for (const courseId of semester.courseIds) {
      const course = courses[courseId];
      if (!course) continue;

      const missing = course.prerequisites.filter((prereq) => !availableBefore.has(prereq));
      if (missing.length > 0) {
        warnings.set(courseId, missing);
      }
    }
  }

  return warnings;
}
