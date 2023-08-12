import { NextPage } from "next";
import { FC, PropsWithChildren, ReactElement, ReactNode } from "react";

export type FCC<P = {}> = FC<PropsWithChildren<P>>;

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
