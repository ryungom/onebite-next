import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SearchableLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const route = useRouter();
  const [search, setSearch] = useState("");
  const q = route.query.q as string;
  useEffect(() => {
    setSearch(q || "");
  }, [q]);
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!search) return;
    setSearch(e.target.value);
  };
  const pageMove = () => {
    route.push(`/search?q=${search}`);
  };
  const keyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key = "enter")) {
      pageMove();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={inputChange}
        onKeyDown={keyDown43}
        placeholder="검색어를 입력해주세요 ..."
      />
      <button onClick={pageMove}>검색</button>
      {children}
    </div>
  );
}
