"use client";

import { useDroppable } from "@dnd-kit/core";
import { Check, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/course-card";
import { COURSES } from "@/data/courses";
import { usePlannerStore, usePrerequisiteWarnings } from "@/store/planner-store";
import type { Semester, CompletedCourse } from "@/types";
import { cn } from "@/lib/utils";

interface SemesterColumnProps {
  semester: Semester;
  completedCourses: CompletedCourse[];
}

export function SemesterColumn({ semester, completedCourses }: SemesterColumnProps) {
  const removeSemester = usePlannerStore((s) => s.removeSemester);
  const warnings = usePrerequisiteWarnings();

  const { setNodeRef, isOver } = useDroppable({
    id: `semester-${semester.id}`,
    disabled: semester.isCompleted,
    data: { semesterId: semester.id },
  });

  const totalCredits = semester.courseIds.reduce(
    (sum, id) => sum + (COURSES[id]?.credits ?? 0),
    0
  );

  const completedMap = new Map(
    completedCourses
      .filter((c) => c.semester === semester.id)
      .map((c) => [c.courseId, c.grade])
  );

  function handleRemove() {
    if (semester.courseIds.length > 0) {
      if (!window.confirm("Remove this semester? Its courses will return to the course bank.")) {
        return;
      }
    }
    removeSemester(semester.id);
    toast.info(`${semester.term} ${semester.year} removed`);
  }

  return (
    <div
      ref={setNodeRef}
      className={cn(
        "flex flex-col rounded-lg border p-3 min-w-[240px] w-[240px] shrink-0 transition-all",
        semester.isCompleted
          ? "bg-success/5 border-success/30 border-solid"
          : semester.courseIds.length > 0
            ? "bg-card border-primary/30 border-dashed"
            : "bg-muted/10 border-muted-foreground/20 border-dashed",
        isOver && !semester.isCompleted && "ring-2 ring-primary/50 bg-primary/5"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1.5">
          {semester.isCompleted && (
            <Check className="h-4 w-4 text-success" />
          )}
          <h3
            className={cn(
              "text-sm font-semibold",
              semester.isCompleted ? "text-success" : "text-foreground"
            )}
          >
            {semester.term} {semester.year}
          </h3>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-muted-foreground">{totalCredits} cr</span>
          {!semester.isCompleted && (
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-muted-foreground hover:text-destructive"
              onClick={handleRemove}
            >
              <Trash2 className="h-3.5 w-3.5" />
            </Button>
          )}
        </div>
      </div>

      {/* Course list */}
      <div className="flex flex-col gap-2 flex-1">
        {semester.courseIds.map((courseId) => (
          <CourseCard
            key={courseId}
            courseId={courseId}
            isCompleted={semester.isCompleted}
            grade={completedMap.get(courseId)}
            warnings={warnings.get(courseId)}
          />
        ))}

        {!semester.isCompleted && semester.courseIds.length === 0 && (
          <div
            className={cn(
              "flex items-center justify-center rounded-md border border-dashed py-8 text-xs text-muted-foreground/60",
              isOver ? "border-primary/50 text-primary/60" : "border-muted-foreground/15"
            )}
          >
            Drop courses here
          </div>
        )}
      </div>
    </div>
  );
}
