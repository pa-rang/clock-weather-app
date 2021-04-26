import React from "react";
import styled from "@emotion/styled";
import { colors } from "../lib/constants/colors";
import useToggleTheme from "../hooks/useToggleTheme";
import { css, Global } from "@emotion/react";

const Styled = {
  Root: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    height: 72px;
    div:nth-of-type(2) {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  `,

  DarkModeToggle: styled.div`
    padding: 8px 16px;
    border-radius: 4px;
    color: ${colors.gray90};
    background-color: ${colors.gray20};
    cursor: pointer;
    &:hover {
      background-color: ${colors.gray30};
    }
  `,

  GoToGithub: styled.img`
    width: 24px;
    height: 24px;
    margin-right: 12px;
  `,
};

function Header() {
  const [theme, toggleTheme] = useToggleTheme();

  const backgroundColor = theme === "light" ? "#fff" : "#171717";

  return (
    <Styled.Root>
      <div />
      <div>
        <a
          href="https://github.com/pa-rang/clock-weather-app"
          target="_blank"
          style={{ height: "24px" }}
        >
          <Styled.GoToGithub
            src={`/assets/icons/github-logo-${
              theme === "dark" ? "light" : "black"
            }.png`}
            alt="github"
          />
        </a>
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
