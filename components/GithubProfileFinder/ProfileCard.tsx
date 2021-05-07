import { useRouter } from "next/router";
import { ReactElement } from "react";
import useSWR from "swr";
import { getGithubProfile } from "../../lib/api";

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
    <div>
      <img src={userData?.avatar_url} />
    </div>
  );
}

export default ProfileCard;
