import React, { ReactElement } from "react";
import { ThemeType } from "../lib/types";
import Box from "./common/Box";

interface Props {
  theme: ThemeType;
}

function GithubProfileFinder({ theme }: Props): ReactElement {
  return <Box title="Github Profile Finder" theme={theme}></Box>;
}

export default GithubProfileFinder;
