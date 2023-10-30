import { NextPageWithLayout } from "@/types";
import { AppProps } from "next/app";
import Head from "next/head";
import { FC, ReactNode, useState } from "react";
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Web3Provider from "@/libraries/web3/Web3Provider";
import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from "react-query";
import { Toaster } from "react-hot-toast";
const queryClientOption: QueryClientConfig = {
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: false, staleTime: 1000 * 5 },
  },
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp: FC<AppPropsWithLayout> = (props) => {
  const { Component, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  const [queryClient] = useState(new QueryClient(queryClientOption));
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Web3Provider>{getLayout(<Component {...pageProps} />)}</Web3Provider>
      </QueryClientProvider>
      <Toaster />
    </div>
  );
};

export default MyApp;
