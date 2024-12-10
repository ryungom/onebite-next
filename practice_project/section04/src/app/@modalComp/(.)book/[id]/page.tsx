import BookPage from "@/app/book/[id]/page";
import Modal from "@/app/components/modal";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Page(props: any) {
  return (
    <>
      <Modal>
        <BookPage {...props} />
      </Modal>
    </>
  );
}
