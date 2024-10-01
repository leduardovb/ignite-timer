import { Card, CardContent } from "@/components/ui/card";
import { Header } from "../../components/header";

export default function AppLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex min-h-screen items-center justify-center p-10">
      <main className="h-[46.25rem] w-full max-w-[70rem]">
        <Card className="flex h-full flex-col space-y-[4.5rem] overflow-hidden border-0">
          <Header />
          <CardContent className="overflow-hidden px-[6rem] pb-16">
            {children}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
