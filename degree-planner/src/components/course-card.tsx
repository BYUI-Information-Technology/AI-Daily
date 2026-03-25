"use client";

import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { AlertTriangle, GripVertical } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { COURSES } from "@/data/courses";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  courseId: string;
  isCompleted?: boolean;
  grade?: string;
  warnings?: string[];
  isDragOverlay?: boolean;
}

const CATEGORY_BORDER: Record<string, string> = {
  core: "border-l-course-core",
  "general-education": "border-l-course-gened",
  elective: "border-l-course-elective",
};

const CATEGORY_LABEL: Record<string, string> = {
  core: "Core",
  "general-education": "Gen Ed",
  elective: "Elective",
};

export function CourseCard({
  courseId,
  isCompleted,
  grade,
  warnings,
  isDragOverlay,
}: CourseCardProps) {
  const course = COURSES[courseId];
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: courseId,
      disabled: isCompleted,
      data: { courseId },
    });

  if (!course) return null;

  const style = transform
    ? { transform: CSS.Transform.toString(transform) }
    : undefined;

  const hasWarning = warnings && warnings.length > 0;

  return (
    <div
      ref={isDragOverlay ? undefined : setNodeRef}
      style={style}
      className={cn(
        "rounded-md border border-border bg-card px-3 py-2 text-sm transition-all",
        "border-l-4",
        CATEGORY_BORDER[course.category] ?? "border-l-border",
        isDragging && "opacity-40",
        isDragOverlay && "shadow-lg scale-105 rotate-1 cursor-grabbing",
        isCompleted && "opacity-70",
        !isCompleted && !isDragOverlay && "cursor-grab hover:bg-accent/50",
        hasWarning && "ring-1 ring-warning/40"
      )}
      {...(isCompleted ? {} : { ...attributes, ...listeners })}
    >
      {/* Top row: code + badges */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 min-w-0">
          {!isCompleted && (
            <GripVertical className="h-3.5 w-3.5 shrink-0 text-muted-foreground/40" />
          )}
          <span className="font-semibold text-foreground text-xs">{course.code}</span>
          {hasWarning && (
            <Tooltip>
              <TooltipTrigger>
                <AlertTriangle className="h-3 w-3 text-warning shrink-0" />
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-xs">
                <p className="text-xs">
                  Missing prerequisite:{" "}
                  {warnings!
                    .map((id) => COURSES[id]?.code ?? id)
                    .join(", ")}
                </p>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
        <div className="flex items-center gap-1 shrink-0">
          {grade && (
            <Badge variant="secondary" className="text-[10px] px-1.5 py-0 bg-success/15 text-success border-success/30">
              {grade}
            </Badge>
          )}
          <Badge variant="outline" className="text-[10px] px-1.5 py-0">
            {course.credits} cr
          </Badge>
        </div>
      </div>
      {/* Bottom row: course name */}
      <p className="text-xs text-muted-foreground mt-0.5 leading-tight">{course.name}</p>
    </div>
  );
}

export function CourseCardOverlay({ courseId }: { courseId: string }) {
  return <CourseCard courseId={courseId} isDragOverlay />;
}
