"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export function AppProjectStepper() {
  const [value, setValue] = useState(0);

  const increment = () => setValue((prev) => prev + 1);

  const decrement = () => setValue((prev) => (prev ? prev - 1 : 0));

  return (
    <div className="mx-2 flex h-10 items-center gap-x-2 border-b-2 border-gray-600 px-1 text-lg font-bold text-gray-600">
      <Button
        type="button"
        size={"icon"}
        variant={"ghost"}
        className="size-4"
        onClick={decrement}
      >
        <Minus size={12} />
      </Button>
      <div className={cn(!!value && "text-gray-300")}>
        {value.toString().padStart(2, "0")}
      </div>
      <Button
        type="button"
        size={"icon"}
        variant={"ghost"}
        className="size-4"
        onClick={increment}
      >
        {value !== 60 && <Plus size={12} />}
      </Button>
    </div>
  );
}
