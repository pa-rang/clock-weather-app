import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import { colors } from "../lib/constants/colors";
import { getCurrentTime } from "../lib/utils/getCurrentTime";

const Styled = {
  Root: styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: ${colors.gray10};
    border: 1px solid ${colors.gray40};
    & > div {
      position: relative;
      height: 2px;
      border-radius: 1px;
      transform-origin: 100%;
    }
  `,

  HourHand: styled.div<{ hourDegree: number }>`
    top: 100px;
    left: 40px;
    width: 60px;
    background-color: red;
    transform: ${({ hourDegree }) => `rotate(${hourDegree}deg)`};
  `,

  MunuteHand: styled.div<{ minuteDegree: number }>`
    top: 98px;
    left: 40px;
    width: 60px;
    background-color: yellow;
    transform: ${({ minuteDegree }) => `rotate(${minuteDegree}deg)`};
  `,

  SecondHand: styled.div<{ secondDegree: number }>`
    top: 96px;
    left: 10px;
    width: 90px;
    background-color: blue;
    transform: ${({ secondDegree }) => `rotate(${secondDegree}deg)`};
  `,
};

function Clock(): ReactElement {
  const { hour, minute, second } = getCurrentTime();
  console.log(`hour, minute, second`, hour, minute, second);

  const hourDegree = (hour + minute / 60) * (360 / 12) + 90;
  const minuteDegree = (minute + second / 60) * (360 / 60) + 90;
  const secondDegree = second * (360 / 60) + 90;

  return (
    <Styled.Root>
      <Styled.HourHand hourDegree={hourDegree} />
      <Styled.MunuteHand minuteDegree={minuteDegree} />
      <Styled.SecondHand secondDegree={secondDegree} />
    </Styled.Root>
  );
}

export default Clock;
