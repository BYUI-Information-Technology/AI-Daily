# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Standalone drag-and-drop degree planner for BYU-Idaho students. Built with Next.js 16, React 19, shadcn/ui, dnd-kit, and Zustand. All data is mock (no backend); state persists to localStorage.

## Context

This project was built as part of a BYU-Idaho IT department activity where employees were challenged to spend roughly 20-30 minutes "vibe coding" a web app of their choice using Claude Code. The CIO drafted a plan using `/plan`, then let Claude develop the app as an agentic pair programmer. This is not intended as a replacement for the official degree planner — it is a demonstration of how quickly Claude Code can build a functional application.

## Commands

```bash
npm run dev      # Dev server on localhost:3000
npm run build    # Production build (includes TypeScript checking)
npm run lint     # ESLint
```

No test framework is configured.

## Architecture

### State Management

Single Zustand store (`src/store/planner-store.ts`) with `persist` middleware for localStorage. Uses a `_hasHydrated` flag to prevent SSR/client hydration mismatches — the page renders a loading skeleton until hydration completes.

Derived hooks (`useAvailableCourses`, `usePrerequisiteWarnings`, `useGraduationStatus`, `useProgress`) use `useMemo` to avoid infinite re-render loops — Zustand's default `Object.is` equality check triggers infinite renders when selectors return new object/Map/array references on every call.

### Drag-and-Drop

dnd-kit `DndContext` wraps the sidebar + planner grid in `dnd-provider.tsx`. Container IDs follow the convention `semester-{id}` and `course-bank`. The `onDragEnd` handler routes to store actions (`placeCourse`, `moveCourse`, `removeCourse`) and fires prerequisite warning toasts.

### Data Flow

```
Mock data (src/data/)  →  Zustand store  →  Derived hooks  →  Components
                                          ↓
                         Business logic (src/lib/prerequisites.ts, graduation.ts)
```

- `courses.ts`: 33 courses keyed by kebab-case ID (e.g., `"cse-110"`)
- `majors.ts`: CS (56 cr) and Business Management (50 cr) with requirement groups
- `students.ts`: Default student with completed + planned semesters

### Component Hierarchy

```
Page → Header + DndProvider
                  └─ Sidebar (progress, requirements checklist, course bank)
                  └─ PlannerGrid (semester columns + add semester)
```

Sidebar sections are independently scrollable: progress is fixed, requirements caps at 35vh, course bank fills remaining space.

## Key Conventions

- All components are `"use client"` (no server components beyond layout)
- shadcn/ui uses base-ui (not Radix) — no `asChild` prop on triggers, `onValueChange` passes `string | null`
- Dark mode is the default (class `dark` on `<html>`)
- BYU-Idaho brand blue: `#006EB6` as `--primary`
- Course cards use left border color by category: `border-l-course-core` (blue), `border-l-course-gened` (teal), `border-l-course-elective` (amber)
- Completed semesters are locked (cannot drag to/from, cannot remove)
- Prerequisite validation treats same-semester placement as unmet

## Design Spec

Full design document: `docs/superpowers/specs/2026-03-25-degree-planner-design.md`
