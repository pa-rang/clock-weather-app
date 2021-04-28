import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import { colors } from "../lib/constants/colors";

const Styled = {
  Root: styled.div`
    padding: 12px 16px;
    background-color: ${colors.primary};
    font-size: 14px;
    font-weight: 700;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
  `,
};

interface Props {}

function ChangeRegionBtn({}: Props): ReactElement {
  return <Styled.Root>지역 바꾸기</Styled.Root>;
}

export default ChangeRegionBtn;
