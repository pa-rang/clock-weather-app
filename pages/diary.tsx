import React, { ReactElement } from "react";
import Box from "../components/common/Box";
import Header from "../components/common/Header";
import styled from "@emotion/styled";

const Styled = {
  BoxWrapper: styled.div`
    margin: 0 auto;
    max-width: 360px;
  `,
};

function Diary(): ReactElement {
  return (
    <>
      <Header />
      <Styled.BoxWrapper>
        <Box title="오늘의 일기">
          <div>Diary</div>
        </Box>
      </Styled.BoxWrapper>
    </>
  );
}

export default Diary;
