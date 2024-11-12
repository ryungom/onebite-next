import Link from "next/link";
import { ReactNode } from "react";

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bodyWrap">
      <header>
        <h1>
          <Link href="/">JUNE_CINEMA</Link>
        </h1>
      </header>
      <main>{children}</main>
      <footer>COPYRIGHT @RYUNGOM</footer>
    </div>
  );
}
