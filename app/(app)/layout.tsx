import { Card, CardContent } from "@/components/ui/card";
import { Header } from "../../components/header";
import { AppProject } from "./app-project";

export default function AppLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex min-h-screen items-center justify-center p-10">
      <main className="h-[46.25rem] w-full max-w-[70rem]">
        <Card className="flex h-full flex-col space-y-[4.5rem] overflow-hidden border-0">
          <Header />
          <CardContent className="h-full overflow-hidden px-[6rem] pb-16">
            <AppProject>{children}</AppProject>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
