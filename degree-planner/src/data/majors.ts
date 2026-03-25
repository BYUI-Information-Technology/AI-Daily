import type { Major } from "@/types";

export const MAJORS: Record<string, Major> = {
  "computer-science": {
    id: "computer-science",
    name: "Computer Science",
    totalCreditsRequired: 56,
    requirements: [
      {
        id: "cs-core",
        name: "Core CS Courses",
        type: "core",
        requiredCourseIds: [
          "cse-110", "cse-111", "cse-210", "cse-212",
          "cse-270", "cse-340", "cse-341", "cse-381",
          "cse-450", "math-221",
        ],
        creditsRequired: 30,
      },
      {
        id: "cs-gened",
        name: "General Education",
        type: "general-education",
        requiredCourseIds: [
          "eng-150", "eng-316", "math-108", "math-112",
          "rel-200", "rel-225",
        ],
        creditsRequired: 17,
      },
      {
        id: "cs-electives",
        name: "CS Electives",
        type: "elective",
        requiredCourseIds: [],
        creditsRequired: 9,
        electiveOptions: ["cse-310", "cse-350", "cse-370", "cse-382", "cse-499"],
        electivesNeeded: 3,
      },
    ],
  },
  "business-management": {
    id: "business-management",
    name: "Business Management",
    totalCreditsRequired: 50,
    requirements: [
      {
        id: "bus-core",
        name: "Core Business Courses",
        type: "core",
        requiredCourseIds: [
          "bus-100", "bus-201", "bus-202", "bus-301",
          "bus-310", "bus-340", "bus-401", "econ-150",
        ],
        creditsRequired: 24,
      },
      {
        id: "bus-gened",
        name: "General Education",
        type: "general-education",
        requiredCourseIds: [
          "eng-150", "eng-316", "math-108", "math-112",
          "rel-200", "rel-225",
        ],
        creditsRequired: 17,
      },
      {
        id: "bus-electives",
        name: "Business Electives",
        type: "elective",
        requiredCourseIds: [],
        creditsRequired: 9,
        electiveOptions: ["bus-320", "bus-330", "bus-350", "mkt-360"],
        electivesNeeded: 3,
      },
    ],
  },
};

export const MAJORS_LIST = Object.values(MAJORS);
