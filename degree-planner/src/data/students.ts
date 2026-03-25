import type { StudentPlan } from "@/types";

export const DEFAULT_STUDENT_PLAN: StudentPlan = {
  studentName: "Jane Doe",
  selectedMajorId: "computer-science",
  completedCourses: [
    { courseId: "cse-110", grade: "A", semester: "fall-2024" },
    { courseId: "math-108", grade: "B+", semester: "fall-2024" },
    { courseId: "rel-200", grade: "A-", semester: "fall-2024" },
    { courseId: "cse-111", grade: "A-", semester: "winter-2025" },
    { courseId: "math-112", grade: "B", semester: "winter-2025" },
    { courseId: "eng-150", grade: "A", semester: "winter-2025" },
  ],
  semesters: [
    {
      id: "fall-2024",
      term: "Fall",
      year: 2024,
      courseIds: ["cse-110", "math-108", "rel-200"],
      isCompleted: true,
    },
    {
      id: "winter-2025",
      term: "Winter",
      year: 2025,
      courseIds: ["cse-111", "math-112", "eng-150"],
      isCompleted: true,
    },
    {
      id: "fall-2025",
      term: "Fall",
      year: 2025,
      courseIds: ["cse-210", "cse-270", "rel-225"],
      isCompleted: false,
    },
    {
      id: "winter-2026",
      term: "Winter",
      year: 2026,
      courseIds: [],
      isCompleted: false,
    },
  ],
};
