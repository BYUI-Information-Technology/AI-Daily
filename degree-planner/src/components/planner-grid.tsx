"use client";

import { usePlannerStore } from "@/store/planner-store";
import { SemesterColumn } from "@/components/semester-column";
import { AddSemester } from "@/components/add-semester";

const TERM_ORDER: Record<string, number> = { Fall: 0, Winter: 1, Spring: 2 };

export function PlannerGrid() {
  const semesters = usePlannerStore((s) => s.semesters);
  const completedCourses = usePlannerStore((s) => s.completedCourses);

  const sorted = [...semesters].sort(
    (a, b) => a.year * 10 + TERM_ORDER[a.term] - (b.year * 10 + TERM_ORDER[b.term])
  );

  return (
    <div className="flex-1 overflow-x-auto p-4">
      <div className="flex gap-4 min-h-full">
        {sorted.map((semester) => (
          <SemesterColumn
            key={semester.id}
            semester={semester}
            completedCourses={completedCourses}
          />
        ))}
        <AddSemester />
      </div>
    </div>
  );
}
