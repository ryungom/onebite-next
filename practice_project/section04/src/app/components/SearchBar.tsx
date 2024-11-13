"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const route = useRouter();
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    route.push(`/search?q=${search}`);
  };
  return (
    <div>
      <input type="text" value={search} onChange={onChangeValue} />
      <button onClick={onSubmit}>검색</button>
    </div>
  );
}
