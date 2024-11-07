import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import BookItem from "@/components/book-item";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchBoooks from "@/lib/fetch-books";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const query = context.query.q;
  const searchData = await fetchBoooks(query as string);
  return {
    props: { searchData },
  };
};

export default function Page({ searchData }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      {searchData.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
