"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useDroppable } from "@dnd-kit/core";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CourseCard } from "@/components/course-card";
import { useAvailableCourses } from "@/store/planner-store";
import type { CourseCategory } from "@/types";
import { cn } from "@/lib/utils";

export function CourseBank() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<CourseCategory | "all">("all");
  const available = useAvailableCourses();

  const { setNodeRef, isOver } = useDroppable({
    id: "course-bank",
    data: { type: "bank" },
  });

  const filtered = available.filter((course) => {
    const matchesSearch =
      search === "" ||
      course.code.toLowerCase().includes(search.toLowerCase()) ||
      course.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || course.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div
      ref={setNodeRef}
      className={cn(
        "p-4 transition-colors",
        isOver && "bg-primary/5"
      )}
    >
      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
        Available Courses
      </h3>

      <div className="space-y-2 mb-3">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
          <Input
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-8 pl-8 text-xs"
          />
        </div>
        <Select value={filter} onValueChange={(v: string | null) => { if (v) setFilter(v as typeof filter); }}>
          <SelectTrigger className="h-8 text-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="core">Core</SelectItem>
            <SelectItem value="general-education">Gen Ed</SelectItem>
            <SelectItem value="elective">Elective</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        {filtered.length === 0 ? (
          <p className="text-xs text-muted-foreground/60 text-center py-4">
            {available.length === 0
              ? "All courses have been placed"
              : "No courses match your search"}
          </p>
        ) : (
          filtered.map((course) => (
            <CourseCard key={course.id} courseId={course.id} />
          ))
        )}
      </div>
    </div>
  );
}
