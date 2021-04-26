import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import { colors } from "../../lib/constants/colors";

const Styled = {
  Root: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 36px 16px;
    min-height: 320px;
    border-radius: 12px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  `,
};

type Props = {
  children?: React.ReactNode;
};

function Box({ children }: Props): ReactElement {
  return <Styled.Root>{children}</Styled.Root>;
}

export default Box;
