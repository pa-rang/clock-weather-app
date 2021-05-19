import React, { ReactElement, useMemo } from "react";
import styled from "@emotion/styled";
import { colors } from "../lib/constants/colors";
import { useCurrentTime } from "../hooks/useCurrentTime";
import { ThemeType } from "../lib/types";
import Box from "./common/Box";
import useTheme from "../hooks/useTheme";

const Styled = {
  Root: styled.div<{ theme: ThemeType }>`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: ${({ theme }) =>
      theme === "dark" ? colors.gray90 : colors.gray10};
    border: 3px solid
      ${({ theme }) => (theme === "dark" ? colors.gray10 : colors.gray70)};
    & > div {
      position: relative;
      border-radius: 2px;
      transform-origin: 100%;
    }
  `,

  HourHand: styled.div<{ hourDegree: number; theme: ThemeType }>`
    top: 100px;
    left: 40px;
    width: 60px;
    height: 4px;
    background-color: ${({ theme }) =>
      theme === "dark" ? colors.gray10 : colors.gray80};
    transform: ${({ hourDegree }) => `rotate(${hourDegree}deg)`};
  `,

  MinuteHand: styled.div<{ minuteDegree: number; theme: ThemeType }>`
    top: 98px;
    left: 20px;
    width: 80px;
    height: 3px;
    background-color: ${({ theme }) =>
      theme === "dark" ? colors.gray10 : colors.gray80};
    transform: ${({ minuteDegree }) => `rotate(${minuteDegree}deg)`};
  `,

  SecondHand: styled.div<{ secondDegree: number; theme: ThemeType }>`
    top: 96px;
    left: 10px;
    width: 90px;
    height: 2px;
    background-color: ${({ theme }) =>
      theme === "dark" ? colors.gray10 : colors.gray80};
    transform: ${({ secondDegree }) => `rotate(${secondDegree}deg)`};
  `,
};

function Clock(): ReactElement {
  const { theme } = useTheme();
  const { hour, minute, second } = useCurrentTime();

  const hourDegree = useMemo(
    () => (hour + minute / 60) * (360 / 12) + 90,
    [hour, minute]
  );
  const minuteDegree = useMemo(
    () => (minute + second / 60) * (360 / 60) + 90,
    [minute, second]
  );
  const secondDegree = useMemo(() => second * (360 / 60) + 90, [second]);

  return (
    <Box title="시계" center>
      <Styled.Root theme={theme}>
        <Styled.HourHand hourDegree={hourDegree} theme={theme} />
        <Styled.MinuteHand minuteDegree={minuteDegree} theme={theme} />
        <Styled.SecondHand secondDegree={secondDegree} theme={theme} />
      </Styled.Root>
    </Box>
  );
}

export default Clock;
