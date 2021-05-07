import React, { ReactElement } from "react";
import { ThemeType } from "../../lib/types";
import Box from "../common/Box";
import { useRouter } from "next/router";
import ProfileCard from "./ProfileCard";

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
        <input value={nickname} onChange={handleChange} />
        <ProfileCard />
      </form>
    </Box>
  );
}

export default GithubProfileFinder;
