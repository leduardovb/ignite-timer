import { PlayIcon } from "@/assets/icons/play.icon";
import { Button } from "@/components/ui/button";
import { AppProjectAutocomplete } from "./app-project-autocomplete";
import { AppProjectStepper } from "./app-project-stepper";

export function AppProjectForm({ children }: React.PropsWithChildren) {
  return (
    <form className="flex flex-col items-center gap-y-[3.5rem]">
      <div className="flex items-center text-lg font-bold text-gray-300">
        <label htmlFor="task">Vou trabalhar em</label>{" "}
        <AppProjectAutocomplete />
        <label className="font-medium">
          durante
        </label> <AppProjectStepper /> minutos.
      </div>
      {children}

      <Button className="h-[3.5rem] w-full gap-x-2 text-base font-bold hover:bg-green-900">
        <PlayIcon />
        Começar
      </Button>
    </form>
  );
}
