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
  const { activeCycle, completeCycle } = useCycle();
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(
    activeCycle ? differenceInSeconds(new Date(), activeCycle.createdAt) : 0,
  );

  const minutesAmount = activeCycle?.minutesAmount || 0;

  const { minutes, seconds } = calcMinutesAndSeconds(
    minutesAmount,
    amountSecondsPassed,
  );

  useEffect(() => {
    if (!activeCycle) setAmountSecondsPassed(0);
  }, [activeCycle]);

  useEffect(() => {
    const currentSeconds = minutesAmount * 60 - amountSecondsPassed;

    if (currentSeconds <= 0 && activeCycle?.id) {
      const sound = new Audio("/audios/alarm-digital.mp3");
      sound.loop = true;
      sound.play();

      completeCycle(activeCycle.id);
    }
  }, [activeCycle?.id, amountSecondsPassed, minutesAmount, completeCycle]);

  useEffect(() => {
    if (!activeCycle) return;

    const interval = setInterval(() => {
      const diff = differenceInSeconds(new Date(), activeCycle.createdAt);

      document.title = makePageTitle(
        activeCycle.minutesAmount,
        diff,
        activeCycle.task,
      );

      setAmountSecondsPassed(diff);
    }, 1000);

    return () => clearInterval(interval);
  }, [activeCycle]);

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
