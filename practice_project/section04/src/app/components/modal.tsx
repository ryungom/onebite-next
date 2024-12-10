"use client";
import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import style from "./modal.module.css";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      dialogRef.current?.scrollTo({
        top: 0,
      });
    }
  }, []);

  return createPortal(
    <dialog
      onClose={() => router.back()}
      onClick={(e) => {
        if ((e.target as any).nodeName === "DIALOG") {
          router.back();
        }
      }}
      className={style.modal}
      ref={dialogRef}
    >
      {children}
    </dialog>,
    document.querySelector("#modal-root") as HTMLElement,
  );
}
