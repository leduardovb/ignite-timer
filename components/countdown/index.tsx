import { cn } from "@/lib/utils";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  weight: ["700"],
  subsets: ["latin"],
});

export function Countdown({ children }: React.PropsWithChildren) {
  return (
    <div
      className={cn(
        "flex items-center text-[160px] font-bold text-gray-300",
        robotoMono.className,
      )}
    >
      {children}
    </div>
  );
}
