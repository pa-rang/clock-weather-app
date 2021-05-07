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
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  Title: styled.div`
    font-size: 24px;
    font-weight: 600;
  `,

  Contents: styled.div`
    padding: 24px;
  `,
};

type Props = {
  title: string;
  theme: ThemeType;
  children?: React.ReactNode;
  button?: ReactElement;
};

function Box({ title, children, theme, button }: Props): ReactElement {
  return (
    <Styled.Root theme={theme}>
      <Styled.Header>
        <Styled.Title>{title}</Styled.Title>
        {button}
      </Styled.Header>
      <Styled.Contents>{children}</Styled.Contents>
    </Styled.Root>
  );
}

export default Box;
