import styled from "@emotion/styled";
import React from "react";
import ChangeRegionBtn from "../components/ChangeRegionBtn";
import Clock from "../components/Clock";
import Box from "../components/common/Box";
import GithubProfileFinder from "../components/GithubProfileFinder";
import Header from "../components/Header";
import Weather from "../components/Weather";
import useToggleTheme from "../hooks/useToggleTheme";

const Styled = {
  Root: styled.div`
    margin: 0 auto;
    max-width: 640px;
  `,
};

function Home() {
  const [theme, toggleTheme] = useToggleTheme();

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Styled.Root>
        <Clock theme={theme} />
        <Weather theme={theme} />
        <GithubProfileFinder theme={theme} />
      </Styled.Root>
    </>
  );
}

export default Home;
