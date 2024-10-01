import { Countdown } from "@/components/countdown";
import { CountdownItem } from "@/components/countdown/countdown-item";
import { CountdownItemContainer } from "@/components/countdown/countdown-item-container";
import { CountdownSeparator } from "@/components/countdown/countdown-separator";

export function AppCountdown() {
  return (
    <Countdown>
      <CountdownItemContainer>
        <CountdownItem>0</CountdownItem>
        <CountdownItem>0</CountdownItem>
      </CountdownItemContainer>
      <CountdownSeparator />
      <CountdownItemContainer>
        <CountdownItem>0</CountdownItem>
        <CountdownItem>0</CountdownItem>
      </CountdownItemContainer>
    </Countdown>
  );
}
