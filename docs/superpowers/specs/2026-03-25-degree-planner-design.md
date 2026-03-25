# Degree Planner App — Design Spec

## Context

BYU-Idaho students need a visual tool to plan their degree path, see what courses they've completed, and understand whether their current plan meets graduation requirements. This is a standalone demo/prototype app with mock data — not connected to any live systems. It demonstrates drag-and-drop course planning with real-time progress tracking and prerequisite validation.

## Requirements

1. Drag-and-drop courses between a course bank and semester columns (kanban-style)
2. Display completed courses (with grades) vs. planned courses vs. unplaced courses
3. Show graduation progress: overall percentage, per-category breakdown, requirements checklist
4. Prerequisite warnings (non-blocking) when courses are placed before their prerequisites
5. Clear graduation status indicator (on track / missing requirements / incomplete)
6. Two mock majors (Computer Science, Business Management) with ~30 total courses
7. Persist plan to localStorage across page refreshes

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, shadcn/ui (new-york style), Tailwind CSS, Lucide icons
- **Drag-and-drop:** dnd-kit (`@dnd-kit/core`, `@dnd-kit/sortable`, `@dnd-kit/utilities`)
- **State:** Zustand (lightweight store)
- **Notifications:** Sonner (toast)
- **Persistence:** localStorage

## Project Structure

```
Degree-Planner/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with providers
│   │   ├── page.tsx                # Main planner page
│   │   └── globals.css             # Tailwind + brand colors
│   ├── components/
│   │   ├── ui/                     # shadcn/ui components
│   │   ├── header.tsx              # Student info, major selector, graduation status
│   │   ├── sidebar.tsx             # Collapsible sidebar container
│   │   ├── progress-summary.tsx    # Overall progress bar + category breakdowns
│   │   ├── requirements-checklist.tsx  # Grouped checklist (complete/in-progress/missing)
│   │   ├── course-bank.tsx         # Draggable unplaced courses with search/filter
│   │   ├── planner-grid.tsx        # Main area with semester columns
│   │   ├── semester-column.tsx     # Droppable column for one semester
│   │   ├── course-card.tsx         # Draggable course card with prereq warning
│   │   └── add-semester.tsx        # Button to add new semester columns
│   ├── data/
│   │   ├── courses.ts              # ~30 mock courses
│   │   ├── majors.ts               # 2 majors with requirement definitions
│   │   └── students.ts             # 1 mock student with completed courses
│   ├── store/
│   │   └── planner-store.ts        # Zustand store for plan state
│   ├── lib/
│   │   ├── utils.ts                # shadcn cn() utility
│   │   ├── prerequisites.ts        # Prerequisite validation logic
│   │   └── graduation.ts           # Graduation requirement checking logic
│   └── types/
│       └── index.ts                # TypeScript type definitions
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── components.json                 # shadcn config
```

## Data Model

### Types

```typescript
type CourseCategory = "core" | "general-education" | "elective";

interface Course {
  id: string;                    // e.g., "cse-110"
  code: string;                  // e.g., "CSE 110"
  name: string;                  // e.g., "Introduction to Programming"
  credits: number;               // e.g., 3
  prerequisites: string[];       // course IDs, e.g., ["cse-110"]
  category: CourseCategory;
  description: string;
}

interface RequirementGroup {
  id: string;                    // e.g., "cs-core", "gen-ed", "cs-electives"
  name: string;                  // e.g., "Core CS Courses"
  type: CourseCategory;
  requiredCourseIds: string[];   // courses that must be completed
  creditsRequired: number;
  electiveOptions?: string[];    // for elective groups: choose N from these
  electivesNeeded?: number;      // how many electives to pick
}

interface Major {
  id: string;
  name: string;                  // e.g., "Computer Science"
  totalCreditsRequired: number;
  requirements: RequirementGroup[];
}

interface CompletedCourse {
  courseId: string;
  grade: string;                 // e.g., "A", "B+", "C-"
  semester: string;              // e.g., "fall-2024"
}

interface Semester {
  id: string;                    // e.g., "fall-2025"
  term: "Fall" | "Winter" | "Spring";
  year: number;
  courseIds: string[];            // placed course IDs
  isCompleted: boolean;          // true for past semesters (locked, not editable)
}

interface StudentPlan {
  studentName: string;
  selectedMajorId: string;
  completedCourses: CompletedCourse[];
  semesters: Semester[];         // includes both completed (locked) and planned semesters
}
```

### Mock Data: Computer Science Major (30 cr core + 17 cr gen ed + 9 cr elective = 56 total, totalCreditsRequired: 56)

**Core Courses (10 courses, 30 cr):**
- CSE 110 Introduction to Programming (3 cr)
- CSE 111 Programming with Functions (3 cr, prereq: CSE 110)
- CSE 210 Programming with Classes (3 cr, prereq: CSE 111)
- CSE 212 Programming with Data Structures (3 cr, prereq: CSE 210)
- CSE 270 Web Frontend Development (3 cr, prereq: CSE 210)
- CSE 340 Web Backend Development (3 cr, prereq: CSE 212)
- CSE 341 Web Services (3 cr, prereq: CSE 340)
- CSE 381 Operating Systems (3 cr, prereq: CSE 212)
- CSE 450 Machine Learning (3 cr, prereq: CSE 212, MATH 221)
- MATH 221 Statistics (3 cr, prereq: MATH 112)

**General Education (6 courses, 17 cr):**
- ENG 150 Writing and Reasoning (3 cr)
- ENG 316 Technical Writing (3 cr, prereq: ENG 150)
- MATH 108 College Algebra (3 cr)
- MATH 112 Calculus I (4 cr, prereq: MATH 108)
- REL 200 The Eternal Family (2 cr)
- REL 225 Foundations of the Restoration (2 cr)

**CS Electives (choose 3 of 5, 9 cr):**
- CSE 310 Applied Programming (3 cr, prereq: CSE 212)
- CSE 350 Database Systems (3 cr, prereq: CSE 212)
- CSE 370 Cloud Computing (3 cr, prereq: CSE 340)
- CSE 382 Networking (3 cr, prereq: CSE 212)
- CSE 499 Senior Project (3 cr, prereq: CSE 341)

### Mock Data: Business Management Major (24 cr core + 17 cr gen ed + 9 cr elective = 50 total, totalCreditsRequired: 50)

**Core Courses (8 courses, 24 cr):**
- BUS 100 Introduction to Business (3 cr)
- BUS 201 Principles of Accounting (3 cr, prereq: BUS 100)
- BUS 202 Managerial Accounting (3 cr, prereq: BUS 201)
- BUS 301 Business Finance (3 cr, prereq: BUS 202, MATH 108)
- BUS 310 Marketing Principles (3 cr, prereq: BUS 100)
- BUS 340 Organizational Behavior (3 cr, prereq: BUS 100)
- BUS 401 Strategic Management (3 cr, prereq: BUS 301, BUS 310)
- ECON 150 Microeconomics (3 cr)

**General Education:** Same 6 courses as CS (shared IDs).

**Business Electives (choose 3 of 4, 9 cr):**
- BUS 320 Supply Chain Management (3 cr, prereq: BUS 100)
- BUS 330 Human Resource Management (3 cr, prereq: BUS 340)
- BUS 350 Entrepreneurship (3 cr, prereq: BUS 301)
- MKT 360 Digital Marketing (3 cr, prereq: BUS 310)

**Unique course total:** 33 courses (10 CS core + 6 shared gen ed + 5 CS electives + 8 BUS core + 4 BUS electives = 33 unique)

### Course Catalog Scope

The available courses shown in the course bank are derived from the selected major's requirement groups: the union of all `requiredCourseIds` and `electiveOptions` across all requirement groups. When switching majors, only courses relevant to the new major appear.

### Mock Student

- **Name:** Jane Doe
- **Major:** Computer Science
- **Completed semesters (locked, isCompleted: true):**
  - Fall 2024: CSE 110 (A), MATH 108 (B+), REL 200 (A-)
  - Winter 2025: CSE 111 (A-), MATH 112 (B), ENG 150 (A)
- **Planned semesters (editable, isCompleted: false):**
  - Fall 2025: CSE 210, CSE 270, REL 225
  - Winter 2026: (empty)

## Layout (Layout B — Side Panel)

```
+----------------------------------------------------------+
|  [Header: Student name | Major dropdown | Status badge]  |
+------------------+---------------------------------------+
| Sidebar          | Planner Grid                          |
|                  |                                       |
| [Progress]       | [Fall 24 ✓] [Win 25 ✓] [Fall 25] ... |
|  32% overall     |  CSE 110     CSE 111    CSE 210      |
|  Core: 6/30      |  MATH 108    MATH 112   ⚠ CSE 270    |
|  GenEd: 12/17    |  REL 200     ENG 150    REL 225      |
|  Elec: 0/9       |                                       |
|                  |                         [+ Semester]   |
| [Requirements]   |                                       |
|  ✓ Intro Prog    |                                       |
|  ✓ Math Found    |                                       |
|  ◐ Data Struct   |                                       |
|  ○ Operating Sys |                                       |
|  ○ Software Eng  |                                       |
|                  |                                       |
| [Course Bank]    |                                       |
|  🔍 Search...    |                                       |
|  [Filter: All ▾] |                                       |
|  CSE 340         |                                       |
|  CSE 341         |                                       |
|  CSE 381         |                                       |
|  MATH 221        |                                       |
+------------------+---------------------------------------+
```

## Interactions

### Drag-and-Drop (dnd-kit)

1. **Course Bank to Semester:** Adds course to that semester's plan
2. **Semester to Semester:** Moves course between semesters
3. **Semester to Course Bank:** Removes course from plan (returns to available pool)
4. **Within Semester:** Reorder courses (optional, low priority)

### Prerequisite Validation

On every course placement:
1. Find the course's prerequisites
2. Check if each prerequisite appears in a completed semester or a prior planned semester
3. If any prerequisite is missing or in a later/same semester:
   - Add orange warning badge to the course card
   - Show tooltip: "Missing prerequisite: CSE 212 (not in a prior semester)"
   - Fire Sonner toast: "CSE 340 is missing prerequisite CSE 212"
4. Re-validate all courses when any course moves (cascading check)

**Same-semester rule:** A prerequisite in the same semester as the dependent course counts as unmet. CSE 270 alongside CSE 210 in Fall 2025 should trigger a warning because CSE 210 is not in a *prior* semester.

### Semester Removal

- Completed semesters (isCompleted: true) cannot be removed
- Removing a planned semester returns all its courses to the course bank
- Confirmation prompt before removal if semester contains courses

### Graduation Status

Computed from current state:
- **On Track (green):** All requirement groups satisfied by completed + planned courses
- **Missing Requirements (amber):** Some requirement groups have unplaced courses
- **Incomplete (red):** No courses planned beyond completed ones

### Major Switching

Dropdown in header. When switching majors:
- Keep completed courses and completed semesters (they're real history)
- Clear all planned (non-completed) semesters and return courses to the bank
- Recalculate available courses from the new major's requirement groups (union of all requiredCourseIds + electiveOptions)
- Completed courses that aren't relevant to the new major still show in completed semesters but don't count toward requirements
- Update requirements checklist and progress for the new major

## Visual Design

- **BYU-Idaho brand colors:** Primary blue (#006EB6), dark blue (#214491), light blue (#4F9ACF)
- **Completed semesters:** Green background tint, solid border, checkmark
- **Planned semesters:** Dark background, dashed blue border
- **Empty semesters:** Darkest background, dashed gray border, "Drop courses here" placeholder
- **Course cards color-coded by category:** Blue (core), teal (gen ed), amber (elective)
- **Warning badge:** Orange with exclamation icon
- **Dark mode default** (matching BYUI-Agents)

## State Management (Zustand)

```typescript
interface PlannerState {
  studentName: string;
  selectedMajorId: string;
  completedCourses: CompletedCourse[];
  semesters: Semester[];

  // Actions
  placeCourse: (courseId: string, semesterId: string) => void;
  removeCourse: (courseId: string, semesterId: string) => void;
  moveCourse: (courseId: string, fromSemester: string, toSemester: string) => void;
  addSemester: (term: "Fall" | "Winter" | "Spring", year: number) => void;
  removeSemester: (semesterId: string) => void;  // blocked for completed semesters; returns courses to bank
  switchMajor: (majorId: string) => void;         // keeps completed courses, clears planned semesters

  // Computed (derived via selectors)
  getAvailableCourses: () => Course[];
  getPrerequisiteWarnings: () => Map<string, string[]>;
  getGraduationStatus: () => "on-track" | "missing" | "incomplete";
  getProgress: () => { overall: number; byCategory: Record<string, { completed: number; required: number }> };
}
```

localStorage middleware syncs state on every change.

## Verification

1. `npm run dev` — app starts on localhost:3000
2. Drag a course from the bank to a semester — it appears in the column
3. Drag a course with unmet prerequisites — orange warning badge appears + toast
4. Place all required courses — graduation status turns green "On Track"
5. Switch major — plan resets, requirements update
6. Refresh page — plan persists from localStorage
7. `npm run build` — no build errors
