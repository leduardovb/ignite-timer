import { Card, CardContent } from "@/components/ui/card";
import { Header } from "../../components/header";

export default function AppLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex min-h-screen items-center justify-center p-10">
      <main className="h-[46.25rem] w-full max-w-[70rem]">
        <Card className="h-full space-y-[4.5rem] border-0">
          <Header />
          <CardContent>{children}</CardContent>
        </Card>
      </main>
    </div>
  );
}
