"use client";

import { useMemo } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CompletedCourse, Semester, GraduationStatus, Course } from "@/types";
import { COURSES } from "@/data/courses";
import { MAJORS } from "@/data/majors";
import { DEFAULT_STUDENT_PLAN } from "@/data/students";
import { validatePrerequisites } from "@/lib/prerequisites";
import { computeProgress, computeGraduationStatus } from "@/lib/graduation";

interface PlannerState {
  studentName: string;
  selectedMajorId: string;
  completedCourses: CompletedCourse[];
  semesters: Semester[];
  _hasHydrated: boolean;

  // Actions
  _setHasHydrated: (v: boolean) => void;
  placeCourse: (courseId: string, semesterId: string) => void;
  removeCourse: (courseId: string, semesterId: string) => void;
  moveCourse: (courseId: string, fromSemesterId: string, toSemesterId: string) => void;
  addSemester: (term: "Fall" | "Winter" | "Spring", year: number) => void;
  removeSemester: (semesterId: string) => void;
  switchMajor: (majorId: string) => void;
  resetPlan: () => void;
}

export const usePlannerStore = create<PlannerState>()(
  persist(
    (set, get) => ({
      studentName: DEFAULT_STUDENT_PLAN.studentName,
      selectedMajorId: DEFAULT_STUDENT_PLAN.selectedMajorId,
      completedCourses: DEFAULT_STUDENT_PLAN.completedCourses,
      semesters: DEFAULT_STUDENT_PLAN.semesters,
      _hasHydrated: false,

      _setHasHydrated: (v) => set({ _hasHydrated: v }),

      placeCourse: (courseId, semesterId) => {
        set((state) => ({
          semesters: state.semesters.map((s) => {
            // Remove from any other semester first
            const filtered = s.courseIds.filter((id) => id !== courseId);
            if (s.id === semesterId && !s.isCompleted) {
              return { ...s, courseIds: [...filtered, courseId] };
            }
            return { ...s, courseIds: filtered };
          }),
        }));
      },

      removeCourse: (courseId, semesterId) => {
        set((state) => ({
          semesters: state.semesters.map((s) => {
            if (s.id === semesterId && !s.isCompleted) {
              return { ...s, courseIds: s.courseIds.filter((id) => id !== courseId) };
            }
            return s;
          }),
        }));
      },

      moveCourse: (courseId, fromSemesterId, toSemesterId) => {
        set((state) => ({
          semesters: state.semesters.map((s) => {
            if (s.id === fromSemesterId) {
              return { ...s, courseIds: s.courseIds.filter((id) => id !== courseId) };
            }
            if (s.id === toSemesterId && !s.isCompleted) {
              return { ...s, courseIds: [...s.courseIds, courseId] };
            }
            return s;
          }),
        }));
      },

      addSemester: (term, year) => {
        const id = `${term.toLowerCase()}-${year}`;
        const exists = get().semesters.some((s) => s.id === id);
        if (exists) return;

        set((state) => ({
          semesters: [
            ...state.semesters,
            { id, term, year, courseIds: [], isCompleted: false },
          ],
        }));
      },

      removeSemester: (semesterId) => {
        const semester = get().semesters.find((s) => s.id === semesterId);
        if (!semester || semester.isCompleted) return;

        set((state) => ({
          semesters: state.semesters.filter((s) => s.id !== semesterId),
        }));
      },

      switchMajor: (majorId) => {
        set((state) => ({
          selectedMajorId: majorId,
          semesters: state.semesters
            .map((s) => (s.isCompleted ? s : { ...s, courseIds: [] }))
            .filter((s) => s.isCompleted || s.courseIds.length === 0),
        }));
      },

      resetPlan: () => {
        set({
          studentName: DEFAULT_STUDENT_PLAN.studentName,
          selectedMajorId: DEFAULT_STUDENT_PLAN.selectedMajorId,
          completedCourses: DEFAULT_STUDENT_PLAN.completedCourses,
          semesters: DEFAULT_STUDENT_PLAN.semesters,
        });
      },
    }),
    {
      name: "degree-planner-state",
      version: 1,
      partialize: (state) => ({
        studentName: state.studentName,
        selectedMajorId: state.selectedMajorId,
        completedCourses: state.completedCourses,
        semesters: state.semesters,
      }),
      onRehydrateStorage: () => (state) => {
        state?._setHasHydrated(true);
      },
    }
  )
);

// ==================== Derived Hooks ====================
// These use useMemo to avoid creating new references on every render,
// which would cause infinite re-render loops with Zustand's Object.is equality.

export function useAvailableCourses(): Course[] {
  const selectedMajorId = usePlannerStore((s) => s.selectedMajorId);
  const semesters = usePlannerStore((s) => s.semesters);

  return useMemo(() => {
    const major = MAJORS[selectedMajorId];
    if (!major) return [];

    const majorCourseIds = new Set<string>();
    for (const group of major.requirements) {
      for (const id of group.requiredCourseIds) majorCourseIds.add(id);
      if (group.electiveOptions) {
        for (const id of group.electiveOptions) majorCourseIds.add(id);
      }
    }

    const placedIds = new Set(semesters.flatMap((s) => s.courseIds));

    return Array.from(majorCourseIds)
      .filter((id) => !placedIds.has(id))
      .map((id) => COURSES[id])
      .filter(Boolean) as Course[];
  }, [selectedMajorId, semesters]);
}

export function usePrerequisiteWarnings(): Map<string, string[]> {
  const semesters = usePlannerStore((s) => s.semesters);
  const completedCourses = usePlannerStore((s) => s.completedCourses);

  return useMemo(
    () => validatePrerequisites(semesters, completedCourses, COURSES),
    [semesters, completedCourses]
  );
}

export function useGraduationStatus(): GraduationStatus {
  const selectedMajorId = usePlannerStore((s) => s.selectedMajorId);
  const semesters = usePlannerStore((s) => s.semesters);
  const completedCourses = usePlannerStore((s) => s.completedCourses);

  return useMemo(() => {
    const major = MAJORS[selectedMajorId];
    if (!major) return "incomplete" as const;
    return computeGraduationStatus(major, semesters, completedCourses);
  }, [selectedMajorId, semesters, completedCourses]);
}

export function useProgress() {
  const selectedMajorId = usePlannerStore((s) => s.selectedMajorId);
  const semesters = usePlannerStore((s) => s.semesters);
  const completedCourses = usePlannerStore((s) => s.completedCourses);

  return useMemo(() => {
    const major = MAJORS[selectedMajorId];
    if (!major) return { overall: 0, byCategory: {} };
    return computeProgress(major, semesters, completedCourses);
  }, [selectedMajorId, semesters, completedCourses]);
}
