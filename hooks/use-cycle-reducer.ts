"use client";

import { getActiveCycleInStorage } from "@/lib/get-active-cycle-in-storage";
import { getCyclesInStorage } from "@/lib/get-cycles-in-storage";
import { makePageTitle } from "@/lib/make-page-title";
import { saveCycleInStorage } from "@/lib/save-cycle-in-storage";
import { useCallback, useEffect, useReducer } from "react";
import { v4 as uuid } from "uuid";

export type Cycle = {
  id: string;
  task: string;
  createdAt: Date;
  minutesAmount: number;
  status: "completed" | "stopped" | "running";
};

type StartCycleAction = {
  type: "START_CYCLE";
  task: string;
  minutesAmount: number;
};

type CompleteCycleAction = {
  type: "COMPLETE_CYCLE";
  id: string;
};

type StopCycleAction = {
  type: "STOP_CYCLE";
  id: string;
};

type LoadCyclesAction = {
  type: "LOAD_CYCLES";
  cycles: Array<Cycle>;
  activeCycle: Cycle | null;
};

type Action =
  | StartCycleAction
  | CompleteCycleAction
  | StopCycleAction
  | LoadCyclesAction;

type State = {
  cycles: Array<Cycle>;
  activeCycle: Cycle | null;
};

const initialState: State = {
  cycles: [],
  activeCycle: null,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "START_CYCLE":
      const newCycle: Cycle = {
        id: uuid(),
        status: "running",
        task: action.task,
        createdAt: new Date(),
        minutesAmount: action.minutesAmount,
      };

      document.title = makePageTitle(action.minutesAmount, 0, action.task);

      return {
        ...state,
        activeCycle: newCycle,
        cycles: [newCycle, ...state.cycles],
      };
    case "COMPLETE_CYCLE":
      document.title = "Ignite Timer";

      return {
        ...state,
        activeCycle: null,
        cycles: state.cycles.map((project) => {
          if (project.id === action.id) {
            saveCycleInStorage({ ...project, status: "completed" });
            return { ...project, status: "completed" };
          }
          return project;
        }),
      };
    case "STOP_CYCLE":
      document.title = "Ignite Timer";

      return {
        ...state,
        activeCycle: null,
        cycles: state.cycles.map((project) => {
          if (project.id === action.id) {
            saveCycleInStorage({ ...project, status: "stopped" });
            return { ...project, status: "stopped" };
          }
          return project;
        }),
      };
    case "LOAD_CYCLES":
      return {
        ...state,
        cycles: action.cycles,
        activeCycle: action.activeCycle,
      };
    default:
      return state;
  }
};

export type CycleReducer = {
  cycles: Array<Cycle>;
  activeCycle: Cycle | null;
  startCycle: (task: string, minutesAmount: number) => void;
  completeCycle: (id: string) => void;
  stopCycle: (id: string) => void;
};

export function useCycleReducer(): CycleReducer {
  const [state, dispatch] = useReducer(reducer, initialState);

  const startCycle = useCallback((task: string, minutesAmount: number) => {
    dispatch({ type: "START_CYCLE", task, minutesAmount });
  }, []);

  const completeCycle = useCallback((id: string) => {
    dispatch({ type: "COMPLETE_CYCLE", id });
  }, []);

  const stopCycle = useCallback((id: string) => {
    dispatch({ type: "STOP_CYCLE", id });
  }, []);

  useEffect(() => {
    const cycles = getCyclesInStorage();
    const activeCycle = getActiveCycleInStorage();
    dispatch({ type: "LOAD_CYCLES", cycles, activeCycle });
  }, []);

  useEffect(() => {
    if (!state.activeCycle) return;

    const newCycle = state.activeCycle;
    saveCycleInStorage(newCycle);
  }, [state.activeCycle]);

  return {
    cycles: state.cycles,
    activeCycle: state.activeCycle,
    startCycle,
    completeCycle,
    stopCycle,
  };
}
