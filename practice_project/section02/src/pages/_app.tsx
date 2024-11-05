import GlobalLayout from "@/components/global-layout";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { Component, ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout: (page: ReactNode) => ReactNode;
};

export default function App({
  Component,
  pageProps,
}: AppProps & {
  Component: NextPageWithLayout;
}) {
  const layout = Component.getLayout ?? ((page: ReactNode) => page);
  return <GlobalLayout>{layout(<Component {...pageProps} />)}</GlobalLayout>;
}
