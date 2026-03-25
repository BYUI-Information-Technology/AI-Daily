"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { usePlannerStore } from "@/store/planner-store";

const TERMS = ["Fall", "Winter", "Spring"] as const;

export function AddSemester() {
  const [isOpen, setIsOpen] = useState(false);
  const [term, setTerm] = useState<"Fall" | "Winter" | "Spring">("Fall");
  const [year, setYear] = useState(new Date().getFullYear());
  const addSemester = usePlannerStore((s) => s.addSemester);
  const semesters = usePlannerStore((s) => s.semesters);

  function handleAdd() {
    const id = `${term.toLowerCase()}-${year}`;
    if (semesters.some((s) => s.id === id)) {
      toast.error(`${term} ${year} already exists`);
      return;
    }
    addSemester(term, year);
    setIsOpen(false);
    toast.success(`Added ${term} ${year}`);
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="flex flex-col items-center justify-center rounded-lg border border-dashed border-muted-foreground/20 min-w-[240px] w-[240px] shrink-0 py-8 text-muted-foreground/60 hover:border-primary/40 hover:text-primary/60 transition-colors cursor-pointer"
      >
        <Plus className="h-6 w-6 mb-1" />
        <span className="text-xs">Add Semester</span>
      </button>
    );
  }

  return (
    <div className="flex flex-col gap-3 rounded-lg border border-primary/30 bg-card p-4 min-w-[240px] w-[240px] shrink-0">
      <h4 className="text-sm font-semibold">Add Semester</h4>

      <Select value={term} onValueChange={(v: string | null) => { if (v) setTerm(v as typeof term); }}>
        <SelectTrigger className="h-8 text-sm">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {TERMS.map((t) => (
            <SelectItem key={t} value={t}>
              {t}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Input
        type="number"
        value={year}
        onChange={(e) => setYear(parseInt(e.target.value) || year)}
        className="h-8 text-sm"
        min={2020}
        max={2035}
      />

      <div className="flex gap-2">
        <Button size="sm" className="flex-1 h-7 text-xs" onClick={handleAdd}>
          Add
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="flex-1 h-7 text-xs"
          onClick={() => setIsOpen(false)}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
