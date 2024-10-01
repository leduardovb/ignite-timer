import { CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { HeaderNavItem } from "./header-nav-item";
import { ScrollText, Timer } from "lucide-react";

export function Header() {
  return (
    <CardHeader className="flex-row items-center justify-between px-10 py-0 pt-10">
      <Image src="/logo.svg" alt="Logo" width={40} height={40} priority />
      <nav className="flex items-center space-x-2">
        <HeaderNavItem href="/">
          <Timer size={22} />
        </HeaderNavItem>
        <HeaderNavItem href="/history">
          <ScrollText size={22} />
        </HeaderNavItem>
      </nav>
    </CardHeader>
  );
}
