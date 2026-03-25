# Degree Planner

A drag-and-drop degree planning app for BYU-Idaho students. Drag courses from a course bank into semester columns, track graduation progress, and get prerequisite warnings in real time.

## Background

This project was built as part of a BYU-Idaho IT department activity where employees were challenged to spend roughly 20-30 minutes "vibe coding" a web app of their choice using Claude Code as an agentic pair programmer. The CIO drafted a plan using Claude Code's `/plan` command, then let Claude develop the application. This is not intended as a replacement for the official degree planner — simply a fun activity to demonstrate how quickly Claude Code can build a functional application in a short amount of time.

## Features

- Drag-and-drop courses between a course bank and semester columns
- Two mock majors: Computer Science and Business Management (~33 courses)
- Prerequisite validation with visual warnings
- Graduation progress tracking (overall and per-category)
- Major switching with plan reset
- State persists to localStorage across page refreshes

## Tech Stack

Next.js 16, React 19, TypeScript, Tailwind CSS, shadcn/ui, dnd-kit, Zustand

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to use the planner.
