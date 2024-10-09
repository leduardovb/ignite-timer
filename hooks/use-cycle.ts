"use client";

import { ProjectContext } from "@/app/(app)/app-project";
import { useContext } from "react";

export function useCycle() {
  const context = useContext(ProjectContext);
  return context;
}
