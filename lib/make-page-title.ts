import { calcMinutesAndSeconds } from "./calc-minutes-and-seconds";

export const makePageTitle = (
  minutesAmount: number,
  amountSecondsPassed: number,
  task: string,
) => {
  const { minutes, seconds } = calcMinutesAndSeconds(
    minutesAmount,
    amountSecondsPassed,
  );

  return `${minutes}:${seconds} - ${task}`;
};
