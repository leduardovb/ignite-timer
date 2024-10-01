"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface Props {
  title: string;
  href: string;
}

export function HeaderNavItem({
  href,
  title,
  children,
}: React.PropsWithChildren<Props>) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={href} className="flex items-center justify-center">
            <Button
              size={"icon"}
              variant={"ghost"}
              className={cn(
                "rounded-none transition-shadow hover:bg-transparent hover:shadow-[inset_0_-2px_0_#015F43]",
                isActive
                  ? "text-primary shadow-[inset_0_-2px_0_#015F43] hover:text-primary/90"
                  : "text-primary-foreground",
              )}
            >
              {children}
            </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent align="center">{title}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
