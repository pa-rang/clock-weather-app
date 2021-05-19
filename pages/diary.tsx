import React, { ReactElement } from "react";
import Box from "../components/common/Box";
import Header from "../components/common/Header";
import styled from "@emotion/styled";

const Styled = {
  BoxWrapper: styled.div`
    margin: 0 auto;
    max-width: 360px;
  `,

  DiaryImage: styled.img`
    width: 100%;
    border-radius: 12px;
    margin-bottom: 16px;
  `,
};

const IMG_URL =
  "https://parang-me.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%87%E1%85%A1.png";

const diaryData = [
  {
    title: "오늘의 일기",
    src: IMG_URL,
    contents: "오늘은 맛있는걸 먹었다. 출근하기 싫다",
  },
  {
    title: "오늘의 일기",
    src: IMG_URL,
    contents: "오늘은 맛있는걸 먹었다. 출근하기 싫다",
  },
  {
    title: "오늘의 일기",
    src: IMG_URL,
    contents: "오늘은 맛있는걸 먹었다. 출근하기 싫다",
  },
  {
    title: "오늘의 일기",
    src: IMG_URL,
    contents: "오늘은 맛있는걸 먹었다. 출근하기 싫다",
  },
  {
    title: "오늘의 일기",
    src: IMG_URL,
    contents: "오늘은 맛있는걸 먹었다. 출근하기 싫다",
  },
];

function Diary(): ReactElement {
  return (
    <>
      <Header />
      <Styled.BoxWrapper>
        {diaryData.map(() => (
          <Box title="오늘의 일기">
            <Styled.DiaryImage
              src="https://parang-me.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%87%E1%85%A1.png"
              alt="image"
            />
            <div>오늘은 맛있는걸 먹었다. 출근하기 싫다</div>
          </Box>
        ))}
      </Styled.BoxWrapper>
    </>
  );
}

export default Diary;
