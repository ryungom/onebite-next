import "./globals.css";
import Link from "next/link";
import style from "./layout.module.css";

export default function RootLayout({
  children,
  modalComp,
}: Readonly<{
  children: React.ReactNode;
  modalComp: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>📚 ONEBITE BOOKS</Link>
          </header>
          <main>{children}</main>
          <footer>제작 @winterlood</footer>
        </div>
        {modalComp}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
