import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import { colors } from "../../lib/constants/colors";

const Styled = {
  Root: styled.div`
    width: 320px;
    max-width: 640px;
    min-height: 320px;
    border: 1px solid ${colors.blue40};
  `,
};

type Props = {
  children?: React.ReactNode;
};

function Box({ children }: Props): ReactElement {
  return <Styled.Root>{children}</Styled.Root>;
}

export default Box;
