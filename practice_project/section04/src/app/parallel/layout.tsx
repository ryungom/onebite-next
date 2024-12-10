import { ReactNode } from "react";

export default function Layout({
  children,
  sideBar,
}: {
  children: ReactNode;
  sideBar: ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <div>{sideBar}</div>
    </>
  );
}
