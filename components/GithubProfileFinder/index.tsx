import React, { ReactElement } from "react";
import { ThemeType } from "../../lib/types";
import Box from "../common/Box";
import { useRouter } from "next/router";
import ProfileCard from "./ProfileCard";
import styled from "@emotion/styled";
import { colors } from "../../lib/constants/colors";

const Styled = {
  Input: styled.input<{ theme: ThemeType }>`
    width: calc(100% - 48px);
    height: 40px;
    outline: none;
    border: none;
    border-radius: 8px;
    padding: 0 12px;
    background-color: ${({ theme }) =>
      theme === "dark" ? colors.gray70 : colors.gray20};
  `,
};

interface Props {
  theme: ThemeType;
}

function GithubProfileFinder({ theme }: Props): ReactElement {
  const [nickname, setNickname] = React.useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setNickname(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    router.push({
      query: { profile: nickname },
    });
  };

  return (
    <Box title="Github Profile Finder" theme={theme}>
      <form onSubmit={handleSubmit}>
        <Styled.Input
          value={nickname}
          onChange={handleChange}
          theme={theme}
          placeholder="닉네임을 검색해보세요."
        />
        <ProfileCard />
      </form>
    </Box>
  );
}

export default GithubProfileFinder;
