import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import style from "./searchable-layout.module.css";

export default function SearchableLayout({ children }: { children: React.ReactNode }) {
  const route = useRouter();
  const [search, setSearch] = useState("");
  const q = route.query.q as string;

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const pageMove = () => {
    if (!search || q === search) return;
    route.push(`/search?q=${search}`);
  };

  const keyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      pageMove();
    }
  };

  return (
    <div>
      <div className={style.searchbar_container}>
        <input type="text" value={search} onChange={inputChange} onKeyDown={keyDown} placeholder="검색어를 입력해주세요 ..." />
        <button onClick={pageMove}>검색</button>
      </div>
      {children}
    </div>
  );
}
