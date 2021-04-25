import React from "react";
import styled from "@emotion/styled";
import { colors } from "../constants/colors";

const Styled = {
  Root: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 40px;
    height: 72px;
  `,

  DarkModeToggle: styled.div`
    padding: 8px 16px;
    border-radius: 4px;
    color: ${colors.gray90};
    background-color: ${colors.gray20};
  `,
};

function Header() {
  return (
    <Styled.Root>
      <div />
      <Styled.DarkModeToggle>Light</Styled.DarkModeToggle>
    </Styled.Root>
  );
}

export default Header;
