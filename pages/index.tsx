import styled from "@emotion/styled";
import React from "react";
import Clock from "../components/Clock";
import GithubProfileFinder from "../components/GithubProfileFinder";
import Header from "../components/common/Header";
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
        <Clock />
        <Weather />
        <GithubProfileFinder />
      </Styled.Root>
    </>
  );
}

export default Home;
