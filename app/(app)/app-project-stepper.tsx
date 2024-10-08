"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";

interface Props {
  value: number;
  onChange: (value: number) => void;
}

export function AppProjectStepper(props: Props) {
  const { value, onChange } = props;

  const increment = () => onChange(value + 1);

  const decrement = () => onChange(value ? value - 1 : 0);

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
