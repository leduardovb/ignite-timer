export const calcMinutesAndSeconds = (
  minutesAmount: number,
  amountSecondsPassed: number,
) => {
  const totalSeconds = minutesAmount * 60;
  const remainingSeconds = totalSeconds - amountSecondsPassed;

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  const minutesString = minutes.toString().padStart(2, "0");
  const secondsString = seconds.toString().padStart(2, "0");

  return {
    minutes: minutesString,
    seconds: secondsString,
  };
};
