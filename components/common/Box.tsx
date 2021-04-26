import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import { colors } from "../../lib/constants/colors";
import { ThemeType } from "../../lib/types";

const Styled = {
  Root: styled.div<{ theme: ThemeType }>`
    display: flex;
    flex-direction: column;
    margin: 36px 16px;
    min-height: 320px;
    border-radius: 12px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    background-color: ${({ theme }) =>
      theme === "dark" ? colors.gray90 : colors.white};
  `,

  Header: styled.div`
    padding: 24px;
  `,

  Title: styled.div`
    font-size: 24px;
    font-weight: 600;
  `,

  Contents: styled.div`
    display: flex;
    justify-content: center;
  `,
};

type Props = {
  title: string;
  theme: ThemeType;
  children?: React.ReactNode;
};

function Box({ title, children, theme }: Props): ReactElement {
  return (
    <Styled.Root theme={theme}>
      <Styled.Header>
        <Styled.Title>{title}</Styled.Title>
      </Styled.Header>
      <Styled.Contents>{children}</Styled.Contents>
    </Styled.Root>
  );
}

export default Box;
