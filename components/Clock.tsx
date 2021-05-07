import React, { ReactElement, useMemo } from "react";
import styled from "@emotion/styled";
import { colors } from "../lib/constants/colors";
import { useCurrentTime } from "../hooks/useCurrentTime";
import { ThemeType } from "../lib/types";
import Box from "./common/Box";

const Styled = {
  Root: styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: ${colors.gray10};
    border: 1px solid ${colors.gray40};
    & > div {
      position: relative;
      border-radius: 2px;
      transform-origin: 100%;
    }
  `,

  HourHand: styled.div<{ hourDegree: number }>`
    top: 100px;
    left: 40px;
    width: 60px;
    height: 4px;
    background-color: ${colors.gray50};
    transform: ${({ hourDegree }) => `rotate(${hourDegree}deg)`};
  `,

  MunuteHand: styled.div<{ minuteDegree: number }>`
    top: 98px;
    left: 20px;
    width: 80px;
    height: 3px;
    background-color: ${colors.gray70};
    transform: ${({ minuteDegree }) => `rotate(${minuteDegree}deg)`};
  `,

  SecondHand: styled.div<{ secondDegree: number }>`
    top: 96px;
    left: 10px;
    width: 90px;
    height: 2px;
    background-color: ${colors.green50};
    transform: ${({ secondDegree }) => `rotate(${secondDegree}deg)`};
  `,
};

interface Props {
  theme: ThemeType;
}

function Clock({ theme }: Props): ReactElement {
  const { hour, minute, second } = useCurrentTime();

  const hourDegree = useMemo(() => (hour + minute / 60) * (360 / 12) + 90, [
    hour,
    minute,
  ]);
  const minuteDegree = useMemo(() => (minute + second / 60) * (360 / 60) + 90, [
    minute,
    second,
  ]);
  const secondDegree = useMemo(() => second * (360 / 60) + 90, [second]);

  return (
    <Box title="시계" theme={theme} center>
      <Styled.Root>
        <Styled.HourHand hourDegree={hourDegree} />
        <Styled.MunuteHand minuteDegree={minuteDegree} />
        <Styled.SecondHand secondDegree={secondDegree} />
      </Styled.Root>
    </Box>
  );
}

export default Clock;
