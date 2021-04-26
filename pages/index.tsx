import styled from "@emotion/styled";
import React from "react";
import Clock from "../components/Clock";
import Box from "../components/common/Box";
import Header from "../components/Header";
import Weather from "../components/Weather";

const Styled = {
  Root: styled.div`
    margin: 0 auto;
    max-width: 640px;
  `,
};

function Home() {
  return (
    <>
      <Header />
      <Styled.Root>
        <Box>
          <Clock />
        </Box>
        <Box>
          <Weather />
        </Box>
      </Styled.Root>
    </>
  );
}

export default Home;
