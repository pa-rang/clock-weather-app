import styled from "@emotion/styled";
import React from "react";
import Clock from "../components/Clock";
import Box from "../components/common/Box";
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
        <Box title="시계" theme={theme}>
          <Clock />
        </Box>
        <Box title="날씨" theme={theme}>
          <Weather />
        </Box>
      </Styled.Root>
    </>
  );
}

export default Home;
