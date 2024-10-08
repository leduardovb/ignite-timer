"use client";

import { Input, InputProps } from "@/components/ui/input";
import { forwardRef } from "react";

const AppProjectAutocomplete = forwardRef<HTMLInputElement, InputProps>(
  function AppProjectAutocomplete(props, ref) {
    return (
      <>
        <Input
          id="task"
          ref={ref}
          name="task"
          list="projects"
          placeholder="Dê um nome para o seu projeto"
          className="w-auto min-w-[272px] flex-1 border-b-2 border-gray-600 text-lg placeholder:text-gray-600 focus-visible:ring-0"
          {...props}
        />
        <datalist id="projects">
          <option value="Trabalhar no Design System" />
          <option value="Desenvolver o novo componente" />
          <option value="Reunião com o time de marketing" />
          <option value="Reunião com o time de desenvolvimento" />
        </datalist>
      </>
    );
  },
);

export { AppProjectAutocomplete };
