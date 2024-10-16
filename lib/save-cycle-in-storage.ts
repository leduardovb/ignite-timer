import { Cycle } from "@/hooks/use-cycle-reducer";

export const saveCyclesInStorage = (cycles: Array<Cycle>) => {
  localStorage.setItem(
    process.env.NEXT_PUBLIC_CYCLES_KEY as string,
    JSON.stringify(cycles),
  );
};
