import styled from "@emotion/styled";
import React from "react";
import Clock from "../components/Clock";
import Header from "../components/Header";

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
      </Styled.Root>
    </>
  );
}

export default Home;
