"use server";

import { Cycle } from "@/hooks/use-cycle-reducer";
import { cookies } from "next/headers";

export const saveCycleInCookies = async (cycles: Array<Cycle>) => {
  cookies().set(
    process.env.NEXT_PUBLIC_CYCLES_KEY as string,
    JSON.stringify(cycles),
    {
      path: "/",
      httpOnly: true,
    },
  );
};
