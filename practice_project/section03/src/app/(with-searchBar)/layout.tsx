import { ReactNode } from "react";
import SearchBar from "./SearchBar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <SearchBar />
      {children}
    </div>
  );
}
