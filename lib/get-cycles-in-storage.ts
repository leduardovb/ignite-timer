import { Cycle } from "@/hooks/use-cycle-reducer";

export const getCyclesInStorage = () => {
  const cycles = JSON.parse(
    localStorage.getItem(process.env.NEXT_PUBLIC_CYCLES_KEY as string) || "[]",
  );
  return cycles as Array<Cycle>;
};
