import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactNode } from "react";
import { NextPage } from "next";
import GlobalLayout from "./components/GlobalLayout";

type LayoutType = NextPage & {
  getLayout: (page: ReactNode) => ReactNode;
};

export default function App({ Component, pageProps }: AppProps & { Component: LayoutType }) {
  const layout = Component.getLayout ?? ((page: ReactNode) => page);
  return <GlobalLayout>{layout(<Component {...pageProps} />)}</GlobalLayout>;
}
