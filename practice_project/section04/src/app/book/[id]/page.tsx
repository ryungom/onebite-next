import style from "./page.module.css";
const SERVER = process.env.NEXT_PUBLIC_API_SERVER_URL;

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function Page({ params }: { params: Promise<{ id: string | string[] }> }) {
  const { id } = await params;
  const res = await fetch(`${SERVER}/book/${id}`);
  if (!res.ok) {
    return <div>페칭오류</div>;
  }
  const mockData = await res.json();
  const { title, subTitle, description, author, publisher, coverImgUrl } = mockData;

  return (
    <div className={style.container}>
      <div className={style.cover_img_container} style={{ backgroundImage: `url('${coverImgUrl}')` }}>
        <img src={coverImgUrl} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
}
