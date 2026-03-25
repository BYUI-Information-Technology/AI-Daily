export type CourseCategory = "core" | "general-education" | "elective";

export interface Course {
  id: string;
  code: string;
  name: string;
  credits: number;
  prerequisites: string[];
  category: CourseCategory;
  description: string;
}

export interface RequirementGroup {
  id: string;
  name: string;
  type: CourseCategory;
  requiredCourseIds: string[];
  creditsRequired: number;
  electiveOptions?: string[];
  electivesNeeded?: number;
}

export interface Major {
  id: string;
  name: string;
  totalCreditsRequired: number;
  requirements: RequirementGroup[];
}

export interface CompletedCourse {
  courseId: string;
  grade: string;
  semester: string;
}

export interface Semester {
  id: string;
  term: "Fall" | "Winter" | "Spring";
  year: number;
  courseIds: string[];
  isCompleted: boolean;
}

export interface StudentPlan {
  studentName: string;
  selectedMajorId: string;
  completedCourses: CompletedCourse[];
  semesters: Semester[];
}

export interface PrerequisiteWarning {
  courseId: string;
  missingPrereqs: string[];
}

export type GraduationStatus = "on-track" | "missing" | "incomplete";
