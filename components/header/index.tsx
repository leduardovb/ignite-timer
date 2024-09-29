import { CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { HeaderNavItem } from "./header-nav-item";
import { ClockIcon } from "@/assets/icons/clock.icon";
import { HistoryIcon } from "@/assets/icons/history.icon";

export function Header() {
  return (
    <CardHeader className="flex-row items-center justify-between px-10 py-0 pt-10">
      <Image src="/logo.svg" alt="Logo" width={40} height={40} priority />
      <nav className="flex items-center space-x-2">
        <HeaderNavItem href="/">
          <ClockIcon />
        </HeaderNavItem>
        <HeaderNavItem href="/history">
          <HistoryIcon />
        </HeaderNavItem>
      </nav>
    </CardHeader>
  );
}
