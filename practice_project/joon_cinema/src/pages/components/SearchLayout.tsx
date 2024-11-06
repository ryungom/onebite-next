import { ReactNode, useEffect, useState } from "react";
import style from "./SearchLayout.module.css";
import { useRouter } from "next/router";
export default function SearchLayout({ children }: { children: ReactNode }) {
  const [searchValue, setSearchValue] = useState("");
  const route = useRouter();
  const { q } = route.query;

  useEffect(() => {
    setSearchValue((q as string) || "");
  }, [q]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onClickInput = () => {
    if (!searchValue || searchValue === q) return;
    route.push(`/search/?q=${searchValue}`);
  };

  const onKeyDownEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClickInput();
    }
  };
  return (
    <>
      <div className={style.inputWrap}>
        <input type="text" value={searchValue} onChange={onChangeInput} onKeyDown={onKeyDownEvent} placeholder="검색하시라우,,," />
        <button onClick={onClickInput}>검색</button>
      </div>
      {children}
    </>
  );
}
