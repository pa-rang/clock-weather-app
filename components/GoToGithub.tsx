import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import useTheme from "../hooks/useTheme";

const Styled = {
  Root: styled.a<{ size: number }>`
    height: ${({ size }) => `${size}px`};
    & > img {
      width: ${({ size }) => `${size}px`};
      height: ${({ size }) => `${size}px`};
      margin: 0 16px;
    }
  `,
};

interface Props {
  size?: number;
}

const GITHUB_REPO = "https://github.com/pa-rang/clock-weather-app";

function GoToGithub({ size = 24 }: Props): ReactElement {
  const { theme } = useTheme();

  const iconColor = React.useMemo(
    () => (theme === "dark" ? "light" : "black"),
    [theme]
  );

  return (
    <Styled.Root href={GITHUB_REPO} size={size} target="_blank">
      <img src={`/assets/icons/github-logo-${iconColor}.png`} alt="github" />
    </Styled.Root>
  );
}

export default GoToGithub;
