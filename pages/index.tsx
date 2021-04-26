import styled from "@emotion/styled";
import React from "react";
import Clock from "../components/Clock";
import Box from "../components/common/Box";
import Header from "../components/Header";
import Weather from "../components/Weather";

const Styled = {
  Root: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

function Home() {
  return (
    <>
      <Header />
      <Styled.Root>
        <Clock />
        <Weather />
        <Box />
      </Styled.Root>
    </>
  );
}

export default Home;
