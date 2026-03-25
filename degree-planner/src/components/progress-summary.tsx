"use client";

import { useProgress } from "@/store/planner-store";
import { Progress } from "@/components/ui/progress";

const CATEGORY_COLOR: Record<string, string> = {
  core: "bg-course-core",
  "general-education": "bg-course-gened",
  elective: "bg-course-elective",
};

const CATEGORY_LABEL_SHORT: Record<string, string> = {
  core: "Core",
  "general-education": "Gen Ed",
  elective: "Elective",
};

export function ProgressSummary() {
  const { overall, byCategory } = useProgress();

  return (
    <div className="p-4">
      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
        Progress
      </h3>

      <div className="mb-4">
        <div className="flex items-baseline justify-between mb-2">
          <span className="text-sm text-foreground font-medium">Overall</span>
          <span className="text-sm font-bold text-success">{overall}%</span>
        </div>
        <Progress value={overall} className="h-2.5" />
      </div>

      <div className="space-y-3">
        {Object.entries(byCategory).map(([id, data]) => {
          const pct = data.required > 0 ? Math.round((data.completed / data.required) * 100) : 0;
          const categoryType = id.includes("elective")
            ? "elective"
            : id.includes("gened") || id.includes("gen-ed")
              ? "general-education"
              : "core";

          return (
            <div key={id}>
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-xs text-muted-foreground">{data.label}</span>
                <span className="text-xs text-muted-foreground tabular-nums">
                  {data.completed}/{data.required} cr
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${CATEGORY_COLOR[categoryType] ?? "bg-primary"}`}
                  style={{ width: `${Math.min(pct, 100)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
