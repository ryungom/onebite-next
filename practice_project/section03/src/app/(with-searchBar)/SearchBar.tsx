"use client";
import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <input type="text" value={search} onChange={onChangeValue} />
      <button>검색</button>
    </div>
  );
}
