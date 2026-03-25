"use client";

import { Check, Circle, Clock } from "lucide-react";
import { usePlannerStore } from "@/store/planner-store";
import { COURSES } from "@/data/courses";
import { MAJORS } from "@/data/majors";
import { cn } from "@/lib/utils";

export function RequirementsChecklist() {
  const selectedMajorId = usePlannerStore((s) => s.selectedMajorId);
  const completedCourses = usePlannerStore((s) => s.completedCourses);
  const semesters = usePlannerStore((s) => s.semesters);

  const major = MAJORS[selectedMajorId];
  if (!major) return null;

  const completedIds = new Set(completedCourses.map((c) => c.courseId));
  const plannedIds = new Set(
    semesters
      .filter((s) => !s.isCompleted)
      .flatMap((s) => s.courseIds)
  );

  return (
    <div className="p-4">
      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
        Requirements
      </h3>
        <div className="space-y-4">
          {major.requirements.map((group) => {
            const courseIds =
              group.type === "elective" && group.electiveOptions
                ? group.electiveOptions
                : group.requiredCourseIds;

            const isElective = group.type === "elective";
            const neededCount = isElective ? group.electivesNeeded ?? 0 : courseIds.length;
            const completedCount = courseIds.filter((id) => completedIds.has(id)).length;
            const plannedCount = courseIds.filter(
              (id) => plannedIds.has(id) && !completedIds.has(id)
            ).length;

            return (
              <div key={group.id}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-medium text-foreground">
                    {group.name}
                  </span>
                  {isElective && (
                    <span className="text-xs text-muted-foreground">
                      Pick {neededCount}
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  {courseIds.map((courseId) => {
                    const course = COURSES[courseId];
                    if (!course) return null;

                    const isComplete = completedIds.has(courseId);
                    const isPlanned = plannedIds.has(courseId);

                    return (
                      <div
                        key={courseId}
                        className="flex items-center gap-2 text-xs"
                      >
                        {isComplete ? (
                          <Check className="h-3.5 w-3.5 text-success shrink-0" />
                        ) : isPlanned ? (
                          <Clock className="h-3.5 w-3.5 text-info shrink-0" />
                        ) : (
                          <Circle className="h-3.5 w-3.5 text-muted-foreground/40 shrink-0" />
                        )}
                        <span
                          className={cn(
                            isComplete
                              ? "text-success"
                              : isPlanned
                                ? "text-info"
                                : "text-muted-foreground"
                          )}
                        >
                          {course.code}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
    </div>
  );
}
