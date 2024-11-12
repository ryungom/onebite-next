"use client";

import { ReactNode, useState } from "react";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <div>
      <input type="text" value={searchValue} onChange={onChangeValue} />
    </div>
  );
}
