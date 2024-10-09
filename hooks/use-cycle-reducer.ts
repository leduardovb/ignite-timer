"use client";

import { makePageTitle } from "@/lib/make-page-title";
import { useCallback, useReducer } from "react";
import { v4 as uuid } from "uuid";

type Cycle = {
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

type Action = StartCycleAction | CompleteCycleAction | StopCycleAction;

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
        cycles: state.cycles.map((project) =>
          project.id === action.id
            ? { ...project, status: "completed" }
            : project,
        ),
      };
    case "STOP_CYCLE":
      document.title = "Ignite Timer";

      return {
        ...state,
        activeCycle: null,
        cycles: state.cycles.map((project) =>
          project.id === action.id
            ? { ...project, status: "stopped" }
            : project,
        ),
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

  return {
    cycles: state.cycles,
    activeCycle: state.activeCycle,
    startCycle,
    completeCycle,
    stopCycle,
  };
}
