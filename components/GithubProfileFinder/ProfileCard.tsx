import { ReactElement } from "react";
import useSWR from "swr";
import { getGithubProfile } from "../../lib/api";
import styled from "@emotion/styled";
import { colors } from "../../lib/constants/colors";
import { SWR_KEY } from "../../lib/constants/swr-keys";

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

interface Props {
  profile: string | string[];
}

function ProfileCard({ profile }: Props): ReactElement {
  const { data: userData, error } = useSWR(
    SWR_KEY.PROFILE + profile,
    () => getGithubProfile(String(profile)),
    {
      errorRetryCount: 0,
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      revalidateOnMount: false,
    }
  );

  if (error) return <div>에러 발생</div>;

  if (!userData) {
    return <div>Loading</div>;
  }

  return (
    <Styled.Root>
      <img src={userData?.avatar_url} />
    </Styled.Root>
  );
}

export default ProfileCard;
