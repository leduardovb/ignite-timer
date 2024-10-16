"use client";

import {
  Cycle,
  CycleReducer,
  useCycleReducer,
} from "@/hooks/use-cycle-reducer";
import { createContext, useMemo } from "react";

interface AppProjectProps {
  initialCycles: Array<Cycle>;
  initialActiveCycle: Cycle | null;
}

const ProjectContext = createContext({} as CycleReducer);

function AppProject({
  initialCycles,
  initialActiveCycle,
  children,
}: React.PropsWithChildren<AppProjectProps>) {
  const state = useCycleReducer({
    initialCycles,
    initialActiveCycle,
  });
  const value = useMemo(() => state, [state]);

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
}

export { AppProject, ProjectContext };
