import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import { colors } from "../../lib/constants/colors";
import { ThemeType } from "../../lib/types";
import { css } from "@emotion/react";
import useTheme from "../../hooks/useTheme";

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

  Contents: styled.div<{ center?: boolean }>`
    padding: 0 24px 24px 24px;
    ${({ center }) =>
      center &&
      css`
        display: flex;
        justify-content: center;
        align-items: center;
      `}
  `,
};

type Props = {
  title: string;
  children?: React.ReactNode;
  button?: ReactElement;
  center?: boolean;
};

function Box({ title, children, button, center }: Props): ReactElement {
  const { theme } = useTheme();

  return (
    <Styled.Root theme={theme}>
      <Styled.Header>
        <Styled.Title>{title}</Styled.Title>
        {button}
      </Styled.Header>
      <Styled.Contents center={center}>{children}</Styled.Contents>
    </Styled.Root>
  );
}

export default Box;
