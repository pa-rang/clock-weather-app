import React from "react";
import styled from "@emotion/styled";
import { colors } from "../constants/colors";
import useToggleTheme from "../hooks/useToggleTheme";
import { css, Global } from "@emotion/react";

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

    &:hover {
      background-color: ${colors.gray30};
    }
  `,
};

function Header() {
  const [theme, toggleTheme] = useToggleTheme();

  const backgroundColor = theme === "light" ? "#fff" : "#171717";

  return (
    <Styled.Root>
      <div />
      <div>
        <Styled.DarkModeToggle onClick={() => toggleTheme()}>
          {theme}
        </Styled.DarkModeToggle>
      </div>
      <Global
        styles={css`
          html,
          body {
            background-color: ${backgroundColor};
            transition: 0.3s;
          }
        `}
      />
    </Styled.Root>
  );
}

export default Header;
