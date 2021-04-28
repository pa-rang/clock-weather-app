import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import { colors } from "../lib/constants/colors";
import { css, Global } from "@emotion/react";
import GoToGithub from "./GoToGithub";
import { ThemeType } from "../lib/types";

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
};

type Props = {
  theme: ThemeType;
  toggleTheme: () => void;
};

function Header({ theme, toggleTheme }: Props): ReactElement {
  const backgroundColor = theme === "light" ? "#fff" : "#171717";
  const fontColor = theme === "light" ? "#202020" : "#fff";

  return (
    <Styled.Root>
      <div />
      <div>
        <GoToGithub theme={theme} />
        <Styled.DarkModeToggle onClick={() => toggleTheme()}>
          {theme}
        </Styled.DarkModeToggle>
      </div>
      <Global
        styles={css`
          html,
          body {
            background-color: ${backgroundColor};
            color: ${fontColor};
            transition: 0.3s;
          }
        `}
      />
    </Styled.Root>
  );
}

export default Header;
