import { Cycle } from "@/hooks/use-cycle-reducer";

export const saveCycleInStorage = (cycle: Cycle) => {
  const currentCycles = JSON.parse(
    localStorage.getItem(process.env.NEXT_PUBLIC_CYCLES_KEY as string) || "[]",
  );

  const exists = currentCycles.find((c: Cycle) => c.id === cycle.id);

  let newCycles: Cycle[] = [];

  if (exists) {
    newCycles = currentCycles.map((c: Cycle) =>
      c.id === cycle.id ? cycle : c,
    );
  } else {
    newCycles = [cycle, ...currentCycles];
  }

  localStorage.setItem(
    process.env.NEXT_PUBLIC_CYCLES_KEY as string,
    JSON.stringify(newCycles),
  );
};
