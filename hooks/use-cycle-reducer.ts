"use client";

import { makePageTitle } from "@/lib/make-page-title";
import { useCallback, useReducer } from "react";
import { v4 as uuid } from "uuid";

type Cycle = {
  id: string;
  task: string;
  createdAt: Date;
  isCompleted: boolean;
  minutesAmount: number;
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
      const newProject = {
        id: uuid(),
        task: action.task,
        isCompleted: false,
        createdAt: new Date(),
        minutesAmount: action.minutesAmount,
      };

      document.title = makePageTitle(action.minutesAmount, 0, action.task);

      return {
        ...state,
        activeCycle: newProject,
        cycles: [...state.cycles, newProject],
      };
    case "COMPLETE_CYCLE":
      document.title = "Ignite Timer";

      return {
        ...state,
        activeCycle: null,
        cycles: state.cycles.map((project) =>
          project.id === action.id
            ? { ...project, isCompleted: true }
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
            ? { ...project, isCompleted: false }
            : project,
        ),
      };
    default:
      return state;
  }
};

export type CycleReducer = {
  projects: Array<Cycle>;
  activeProject: Cycle | null;
  startProject: (task: string, minutesAmount: number) => void;
  completeProject: (id: string) => void;
  stopProject: (id: string) => void;
};

export function useCycleReducer(): CycleReducer {
  const [state, dispatch] = useReducer(reducer, initialState);

  const startProject = useCallback((task: string, minutesAmount: number) => {
    dispatch({ type: "START_CYCLE", task, minutesAmount });
  }, []);

  const completeProject = useCallback((id: string) => {
    dispatch({ type: "COMPLETE_CYCLE", id });
  }, []);

  const stopProject = useCallback((id: string) => {
    dispatch({ type: "STOP_CYCLE", id });
  }, []);

  return {
    projects: state.cycles,
    activeProject: state.activeCycle,
    startProject,
    completeProject,
    stopProject,
  };
}
