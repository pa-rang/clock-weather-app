import React, { ReactElement } from "react";
import useSWR from "swr";
import { getGithubProfile } from "../lib/api";
import { ThemeType } from "../lib/types";
import Box from "./common/Box";
import { useRouter } from "next/router";

function UserCard(): ReactElement {
  const {
    query: { profile },
  } = useRouter();

  const { data: userData } = useSWR(String(profile), () =>
    getGithubProfile(String(profile))
  );

  return (
    <div>
      <img src={userData?.avatar_url} />
    </div>
  );
}

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
        <UserCard />
      </form>
    </Box>
  );
}

export default GithubProfileFinder;
