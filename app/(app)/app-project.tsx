"use client";

import { CycleReducer, useCycleReducer } from "@/hooks/use-cycle-reducer";
import { createContext, useMemo } from "react";

const ProjectContext = createContext({} as CycleReducer);

function AppProject({ children }: React.PropsWithChildren) {
  const state = useCycleReducer();
  const value = useMemo(() => state, [state]);

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
}

export { AppProject, ProjectContext };
