import React, { ReactElement } from "react";
import { ThemeType } from "../../lib/types";
import Box from "../common/Box";
import { useRouter } from "next/router";
import ProfileCard from "./ProfileCard";
import styled from "@emotion/styled";
import { colors } from "../../lib/constants/colors";
import useTheme from "../../hooks/useTheme";

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

function GithubProfileFinder(): ReactElement {
  const [nickname, setNickname] = React.useState("");
  const { theme } = useTheme();
  const router = useRouter();
  const {
    query: { profile },
  } = router;

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
    <Box title="Github Profile Finder">
      <form onSubmit={handleSubmit}>
        <Styled.Input
          value={nickname}
          onChange={handleChange}
          theme={theme}
          placeholder="닉네임을 검색해보세요."
        />
        {profile && <ProfileCard profile={profile} />}
      </form>
    </Box>
  );
}

export default GithubProfileFinder;
