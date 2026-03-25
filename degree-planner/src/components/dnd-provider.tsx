"use client";

import { useState, type ReactNode } from "react";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  closestCorners,
  type DragStartEvent,
  type DragEndEvent,
} from "@dnd-kit/core";
import { toast } from "sonner";
import { CourseCardOverlay } from "@/components/course-card";
import { usePlannerStore } from "@/store/planner-store";
import { validatePrerequisites } from "@/lib/prerequisites";
import { COURSES } from "@/data/courses";

export function DndProvider({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const placeCourse = usePlannerStore((s) => s.placeCourse);
  const removeCourse = usePlannerStore((s) => s.removeCourse);
  const moveCourse = usePlannerStore((s) => s.moveCourse);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor)
  );

  function findSemesterContaining(courseId: string) {
    return usePlannerStore
      .getState()
      .semesters.find((s) => s.courseIds.includes(courseId));
  }

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id as string);
  }

  function handleDragEnd(event: DragEndEvent) {
    setActiveId(null);
    const { active, over } = event;
    if (!over) return;

    const courseId = active.id as string;
    const destination = over.id as string;
    const sourceSemester = findSemesterContaining(courseId);

    if (destination === "course-bank") {
      // Drag to bank: remove from current semester
      if (sourceSemester && !sourceSemester.isCompleted) {
        removeCourse(courseId, sourceSemester.id);
      }
    } else if (destination.startsWith("semester-")) {
      const destId = destination.replace("semester-", "");

      if (!sourceSemester) {
        // From bank to semester
        placeCourse(courseId, destId);
      } else if (sourceSemester.id !== destId) {
        // Between semesters
        moveCourse(courseId, sourceSemester.id, destId);
      }

      // Check for prerequisite warnings after placement
      const state = usePlannerStore.getState();
      const warnings = validatePrerequisites(
        state.semesters,
        state.completedCourses,
        COURSES
      );
      const courseWarnings = warnings.get(courseId);
      if (courseWarnings && courseWarnings.length > 0) {
        const course = COURSES[courseId];
        const missingNames = courseWarnings
          .map((id) => COURSES[id]?.code ?? id)
          .join(", ");
        toast.warning(
          `${course?.code ?? courseId} is missing prerequisite: ${missingNames}`
        );
      }
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {children}
      <DragOverlay dropAnimation={null}>
        {activeId ? <CourseCardOverlay courseId={activeId} /> : null}
      </DragOverlay>
    </DndContext>
  );
}
