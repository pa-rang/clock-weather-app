import React, { ReactElement } from "react";
import Header from "../components/common/Header";

interface Props {}

function Diary({}: Props): ReactElement {
  return (
    <>
      <Header />
      <h1>Diary</h1>
    </>
  );
}

export default Diary;
