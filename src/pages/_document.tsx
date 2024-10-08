import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="white" lang="en">
      <Head>
        <link rel="icon" href="./images/favicon.ico" sizes="any" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
