import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import { colors } from "../../lib/constants/colors";
import { css, Global } from "@emotion/react";
import GoToGithub from "../GoToGithub";
import useTheme from "../../hooks/useTheme";
import { useRouter } from "next/router";

const Styled = {
  Root: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    height: 72px;
    div:nth-of-type(1) {
      display: flex;
      align-items: center;
      & > div {
        cursor: pointer;
        font-size: 18px;
        font-weight: bold;
        margin-right: 16px;
      }
    }
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

function Header(): ReactElement {
  const { theme, setTheme } = useTheme();
  const backgroundColor = theme === "light" ? "#fff" : "#171717";
  const fontColor = theme === "light" ? "#202020" : "#fff";
  const router = useRouter();

  const toggleTheme = () => {
    if (theme === "dark") setTheme("light");
    if (theme === "light") setTheme("dark");
  };

  return (
    <Styled.Root>
      <div>
        <div onClick={() => router.push("/")}>홈</div>
        <div onClick={() => router.push("/diary")}>다이어리</div>
      </div>
      <div>
        <GoToGithub />
        <Styled.DarkModeToggle onClick={toggleTheme}>
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
