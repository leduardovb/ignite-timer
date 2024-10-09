"use client";

import { Countdown } from "@/components/countdown";
import { CountdownItem } from "@/components/countdown/countdown-item";
import { CountdownItemContainer } from "@/components/countdown/countdown-item-container";
import { CountdownSeparator } from "@/components/countdown/countdown-separator";
import { useCycle } from "@/hooks/use-cycle";
import { useEffect, useState } from "react";
import { differenceInSeconds } from "date-fns";

export function AppCountdown() {
  const { activeProject, stopProject } = useCycle();
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const totalSeconds = activeProject ? activeProject.minutesAmount * 60 : 0;
  const currentSeconds = totalSeconds - amountSecondsPassed;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = minutesAmount.toString().padStart(2, "0");
  const seconds = secondsAmount.toString().padStart(2, "0");

  useEffect(() => {
    if (!activeProject) setAmountSecondsPassed(0);
  }, [activeProject]);

  useEffect(() => {
    if (currentSeconds <= 0 && activeProject?.id) {
      stopProject(activeProject.id);
    }
  }, [activeProject?.id, currentSeconds, stopProject]);

  useEffect(() => {
    if (!activeProject) return;

    const interval = setInterval(() => {
      setAmountSecondsPassed(
        differenceInSeconds(new Date(), activeProject.createdAt),
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [activeProject]);

  return (
    <Countdown>
      <CountdownItemContainer>
        <CountdownItem>{minutes[0]}</CountdownItem>
        <CountdownItem>{minutes[1]}</CountdownItem>
      </CountdownItemContainer>
      <CountdownSeparator />
      <CountdownItemContainer>
        <CountdownItem>{seconds[0]}</CountdownItem>
        <CountdownItem>{seconds[1]}</CountdownItem>
      </CountdownItemContainer>
    </Countdown>
  );
}
