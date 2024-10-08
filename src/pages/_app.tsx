import { clientAPOLLO } from "@/lib/ApolloClient";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <ApolloProvider client={clientAPOLLO}>
        <Head>
          <title>OARIZED</title>
          <meta
            name="description"
            content="Welcome to OARIZED - Your partner for customized web solutions. Explore our services and discover how we can help your business succeed."
          />
        </Head>

        <Component {...pageProps} />
      </ApolloProvider>
    </Fragment>
  );
}
