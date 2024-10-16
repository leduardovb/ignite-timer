import { Card, CardContent } from "@/components/ui/card";
import { Header } from "../../components/header";
import { AppProject } from "./app-project";
import { cookies } from "next/headers";
import { Cycle } from "@/hooks/use-cycle-reducer";

export default function AppLayout({ children }: React.PropsWithChildren) {
  const store = cookies();
  const maybeCycles = store.get(
    process.env.NEXT_PUBLIC_CYCLES_KEY as string,
  )?.value;

  const cycles: Array<Cycle> = maybeCycles ? JSON.parse(maybeCycles) : [];
  const activeCycle =
    cycles.find((cycle) => cycle.status === "running") || null;

  return (
    <div className="flex min-h-screen items-center justify-center p-10">
      <main className="h-[46.25rem] w-full max-w-[70rem]">
        <Card className="flex h-full flex-col space-y-[4.5rem] overflow-hidden border-0">
          <Header />
          <CardContent className="h-full overflow-hidden px-[6rem] pb-16">
            <AppProject initialCycles={cycles} initialActiveCycle={activeCycle}>
              {children}
            </AppProject>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
