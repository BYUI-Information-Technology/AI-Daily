"use client";

import { Separator } from "@/components/ui/separator";
import { ProgressSummary } from "@/components/progress-summary";
import { RequirementsChecklist } from "@/components/requirements-checklist";
import { CourseBank } from "@/components/course-bank";

export function Sidebar() {
  return (
    <aside className="w-72 shrink-0 border-r border-border bg-card hidden md:flex md:flex-col overflow-hidden">
      {/* Progress — fixed height, no scroll */}
      <div className="shrink-0">
        <ProgressSummary />
      </div>
      <Separator className="shrink-0" />
      {/* Requirements — scrollable, takes available space up to 40% */}
      <div className="shrink-0 overflow-y-auto max-h-[35vh]">
        <RequirementsChecklist />
      </div>
      <Separator className="shrink-0" />
      {/* Course bank — fills remaining space, scrollable */}
      <div className="flex-1 min-h-0 overflow-y-auto">
        <CourseBank />
      </div>
    </aside>
  );
}
