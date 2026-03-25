"use client";

import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePlannerStore, useGraduationStatus } from "@/store/planner-store";
import { MAJORS_LIST } from "@/data/majors";
import { cn } from "@/lib/utils";

const STATUS_CONFIG = {
  "on-track": {
    label: "On Track",
    className: "bg-success/15 text-success border-success/30",
  },
  missing: {
    label: "Missing Requirements",
    className: "bg-warning/15 text-warning border-warning/30",
  },
  incomplete: {
    label: "Incomplete",
    className: "bg-destructive/15 text-destructive border-destructive/30",
  },
};

export function Header() {
  const studentName = usePlannerStore((s) => s.studentName);
  const selectedMajorId = usePlannerStore((s) => s.selectedMajorId);
  const switchMajor = usePlannerStore((s) => s.switchMajor);
  const graduationStatus = useGraduationStatus();

  const statusConfig = STATUS_CONFIG[graduationStatus];

  function handleMajorChange(value: string | null) {
    if (!value || value === selectedMajorId) return;
    const confirmed = window.confirm(
      "Switching majors will clear your planned courses. Completed courses are preserved. Continue?"
    );
    if (confirmed) {
      switchMajor(value);
    }
  }

  return (
    <header className="flex items-center justify-between gap-4 px-4 py-3 bg-primary border-b border-primary/80 shrink-0">
      <div className="flex items-center gap-3 shrink-0">
        <GraduationCap className="h-6 w-6 text-primary-foreground" />
        <h1 className="text-lg font-bold text-primary-foreground whitespace-nowrap">
          Degree Planner
        </h1>
      </div>

      <div className="flex items-center gap-3 flex-wrap justify-end">
        <span className="text-sm text-primary-foreground/80 hidden lg:inline whitespace-nowrap">
          {studentName}
        </span>

        <Select value={selectedMajorId} onValueChange={handleMajorChange}>
          <SelectTrigger className="h-8 w-[180px] text-xs bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground shrink-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {MAJORS_LIST.map((major) => (
              <SelectItem key={major.id} value={major.id}>
                {major.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Badge variant="outline" className={cn("text-xs whitespace-nowrap shrink-0", statusConfig.className)}>
          {statusConfig.label}
        </Badge>
      </div>
    </header>
  );
}
