import { useRouter } from "next/router";
import { ReactElement } from "react";
import useSWR from "swr";
import { getGithubProfile } from "../../lib/api";
import styled from "@emotion/styled";
import { colors } from "../../lib/constants/colors";

const Styled = {
  Root: styled.div`
    & > img {
      max-width: 200px;
      width: 100%;
      border-radius: 50%;
      border: 1px solid ${colors.gray30};
    }
  `,
};

function ProfileCard(): ReactElement {
  const {
    query: { profile },
  } = useRouter();

  const { data: userData } = useSWR(`profile=${String(profile)}`, () =>
    getGithubProfile(String(profile))
  );

  if (!profile) {
    return <div>Github 닉네임을 검색해보세요!</div>;
  }

  if (userData === undefined) {
    return <div>Loading</div>;
  }

  return (
    <Styled.Root>
      <img src={userData?.avatar_url} />
    </Styled.Root>
  );
}

export default ProfileCard;
