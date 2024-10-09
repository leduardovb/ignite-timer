import { getCyclesInStorage } from "./get-cycles-in-storage";

export const getActiveCycleInStorage = () => {
  const cycles = getCyclesInStorage();
  return cycles.find((cycle) => cycle.status === "running") || null;
};
