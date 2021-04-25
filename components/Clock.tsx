import React from "react";
import styled from "@emotion/styled";
import { colors } from "../constants/colors";

const Styled = {
  Root: styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: ${colors.gray10};
    border: 1px solid ${colors.gray40};
  `,
  HourHand: styled.div``,
  MunuteHand: styled.div``,
  SecondHand: styled.div``,
};

function Clock() {
  return (
    <Styled.Root>
      <Styled.HourHand />
      <Styled.MunuteHand />
      <Styled.SecondHand />
    </Styled.Root>
  );
}

export default Clock;
