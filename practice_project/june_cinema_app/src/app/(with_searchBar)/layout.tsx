import { ReactNode } from "react";
import SearchBar from "./SearchBar";

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <SearchBar />
      {children}
    </div>
  );
}
