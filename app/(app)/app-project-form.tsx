"use client";

import { PlayIcon } from "@/assets/icons/play.icon";
import { Button } from "@/components/ui/button";
import { AppProjectAutocomplete } from "./app-project-autocomplete";
import { AppProjectStepper } from "./app-project-stepper";
import { StartTask, StartTaskSchema } from "@/lib/zod/start-task.schema";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCycle } from "@/hooks/use-cycle";
import { HandPalmIcon } from "@/assets/icons/hand-palm.icon";

export function AppProjectForm({ children }: React.PropsWithChildren) {
  const { activeCycle, startCycle, stopCycle } = useCycle();
  const { handleSubmit, register, control, formState, reset } =
    useForm<StartTask>({
      defaultValues: { task: "", minutesAmount: 0 },
      resolver: activeCycle ? undefined : zodResolver(StartTaskSchema),
    });
  const hasErrors = !!(formState.errors.minutesAmount || formState.errors.task);

  const onSubmit = (data: StartTask) => {
    const sound = new Audio("/audios/button.mp3");
    sound.play();

    if (activeCycle) {
      stopCycle(activeCycle.id);
    } else {
      startCycle(data.task, data.minutesAmount);
      reset({
        task: "",
        minutesAmount: 0,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-y-[3.5rem]"
    >
      <div className="flex items-center text-lg font-bold text-gray-300">
        <label htmlFor="task">Vou trabalhar em</label>{" "}
        <AppProjectAutocomplete {...register("task")} />
        <label className="font-medium">durante</label>{" "}
        <Controller
          control={control}
          name="minutesAmount"
          render={({ field }) => (
            <AppProjectStepper value={field.value} onChange={field.onChange} />
          )}
        />
        minutos.
      </div>
      {children}

      <TooltipProvider>
        <Tooltip open={hasErrors}>
          <TooltipTrigger asChild>
            <Button
              disabled={hasErrors}
              variant={!activeCycle ? undefined : "destructive"}
              className="h-[3.5rem] w-full gap-x-2 text-base font-bold"
            >
              {!!activeCycle ? (
                <>
                  <HandPalmIcon />
                  Interromper
                </>
              ) : (
                <>
                  <PlayIcon />
                  Começar
                </>
              )}
            </Button>
          </TooltipTrigger>

          <TooltipContent>
            {formState.errors.task && (
              <div>{formState.errors.task.message}</div>
            )}
            {formState.errors.minutesAmount && (
              <div>{formState.errors.minutesAmount.message}</div>
            )}
            <TooltipArrow />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </form>
  );
}
