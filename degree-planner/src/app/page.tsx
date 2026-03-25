"use client";

import { usePlannerStore } from "@/store/planner-store";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { PlannerGrid } from "@/components/planner-grid";
import { DndProvider } from "@/components/dnd-provider";

export default function Home() {
  const hasHydrated = usePlannerStore((s) => s._hasHydrated);

  if (!hasHydrated) {
    return (
      <div className="flex items-center justify-center h-screen bg-background">
        <div className="text-muted-foreground text-sm">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <DndProvider>
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <PlannerGrid />
        </div>
      </DndProvider>
    </div>
  );
}
