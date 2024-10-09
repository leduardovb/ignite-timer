"use client";

import { Countdown } from "@/components/countdown";
import { CountdownItem } from "@/components/countdown/countdown-item";
import { CountdownItemContainer } from "@/components/countdown/countdown-item-container";
import { CountdownSeparator } from "@/components/countdown/countdown-separator";
import { useCycle } from "@/hooks/use-cycle";
import { useEffect, useState } from "react";
import { differenceInSeconds } from "date-fns";
import { makePageTitle } from "@/lib/make-page-title";
import { calcMinutesAndSeconds } from "@/lib/calc-minutes-and-seconds";

export function AppCountdown() {
  const { activeProject, stopProject } = useCycle();
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const minutesAmount = activeProject?.minutesAmount || 0;

  const { minutes, seconds } = calcMinutesAndSeconds(
    minutesAmount,
    amountSecondsPassed,
  );

  useEffect(() => {
    if (!activeProject) setAmountSecondsPassed(0);
  }, [activeProject]);

  useEffect(() => {
    const currentSeconds = minutesAmount * 60 - amountSecondsPassed;

    if (currentSeconds <= 0 && activeProject?.id) {
      stopProject(activeProject.id);
    }
  }, [activeProject?.id, amountSecondsPassed, minutesAmount, stopProject]);

  useEffect(() => {
    if (!activeProject) return;

    const interval = setInterval(() => {
      const diff = differenceInSeconds(new Date(), activeProject.createdAt);

      document.title = makePageTitle(
        activeProject.minutesAmount,
        diff,
        activeProject.task,
      );

      setAmountSecondsPassed(diff);
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
