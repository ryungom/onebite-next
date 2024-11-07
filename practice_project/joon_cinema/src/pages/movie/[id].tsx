import style from "./[id].module.css";

const data = {
  id: 696047,
  title: "시민덕희",
  releaseDate: "2024-01-24",
  company: "CJeS Studios, Page One Film",
  genres: ["코미디", "범죄"],
  subTitle: "아무도 못 잡으면, 우리가 꼭 잡는다",
  description:
    "세탁소 화재로 인해 대출상품을 알아보던 생활력 만렙 덕희에게 어느 날, 거래은행의 손대리가 합리적인 대출상품을 제안하겠다며 전화를 걸어온다. 대출에 필요하다며 이런저런 수수료를 요구한 손대리에게 돈을 보낸 덕희는 이 모든 과정이 보이스피싱이었음을 뒤늦게 인지하고 충격에 빠진다. 전 재산을 잃고 아이들과 거리로 나앉게 생긴 덕희에게 어느 날 손대리가 다시 전화를 걸어오는데… 이번엔 살려달라는 전화다! 경찰도 포기한 사건, 덕희는 손대리도 구출하고 잃어버린 돈도 찾겠다는 일념으로 필살기 하나씩 장착한 직장 동료들과 함께 중국 칭다오로 직접 날아간다.",
  runtime: 113,
  posterImgUrl: "https://media.themoviedb.org/t/p/w300_and_h450_face/hu4nI6znjpdLqcq2SLfLRc3CJOQ.jpg",
};
export default function Page() {
  return (
    <div className={style.container}>
      <figure style={{ backgroundImage: `url('${data.posterImgUrl}')` }}>
        <img src={data.posterImgUrl} alt="" />
      </figure>

      <section className={style.titleWrap}>
        <div className={style.title_main}>
          <h2 className={style.h2}>{data.title}</h2>
          <aside>
            {data.genres.map((item) => (
              <span>{item}</span>
            ))}
          </aside>
        </div>
        <div className={style.title_sub}>
          <span>{data.runtime + "분"}</span>
          <span>{data.company}</span>
        </div>
      </section>

      <h3 className={style.h3}>{"'" + data.subTitle + "'"}</h3>

      <div className={style.description}>
        <p>{data.description}</p>
        <span>{"개봉일 | " + data.releaseDate}</span>
      </div>
    </div>
  );
}
