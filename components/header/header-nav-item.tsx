"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface Props {
  href: string;
}

export function HeaderNavItem({
  href,
  children,
}: React.PropsWithChildren<Props>) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className="flex items-center justify-center">
      <Button
        size={"icon"}
        variant={"ghost"}
        className={cn(isActive ? "text-primary" : "text-primary-foreground")}
      >
        {children}
      </Button>
    </Link>
  );
}
