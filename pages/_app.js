import { Global } from "@emotion/react";
import globalStyle from "../styles/globalStyle";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
