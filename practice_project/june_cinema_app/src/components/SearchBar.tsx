"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar() {
  const route = useRouter();
  const param = useSearchParams();
  const q = param.get("q");

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setSearchValue(q || "");
  }, [q]);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const searchMovie = () => {
    if (!searchValue || searchValue === q) return;
    route.push(`/search?q=${searchValue}`);
  };
  const onKeyDownSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchMovie();
    }
  };
  return (
    <div className={style.inputWrap}>
      <input
        type="text"
        value={searchValue && searchValue}
        onKeyDown={onKeyDownSearch}
        onChange={onChangeValue}
        placeholder="검색해봐..."
      />
      <button onClick={searchMovie}>검색</button>
    </div>
  );
}
