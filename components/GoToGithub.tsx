import React, { ReactElement } from "react";
import styled from "@emotion/styled";

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

type Props = {
  theme?: "light" | "dark";
  size?: number;
};

const GITHUB_REPO = "https://github.com/pa-rang/clock-weather-app";

function GoToGithub({ theme = "light", size = 24 }: Props): ReactElement {
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
