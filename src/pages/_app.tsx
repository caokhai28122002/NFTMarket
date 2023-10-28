import { NextPageWithLayout } from "@/types";
import { AppProps } from "next/app";
import Head from "next/head";
import { FC, ReactNode } from "react";
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Web3Provider from "@/libraries/web3/Web3Provider";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp: FC<AppPropsWithLayout> = (props) => {
  const { Component, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Web3Provider>{getLayout(<Component {...pageProps} />)}</Web3Provider>
    </div>
  );
};

export default MyApp;
