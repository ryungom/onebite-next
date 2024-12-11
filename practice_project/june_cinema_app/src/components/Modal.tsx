'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.css';
import { useRouter } from 'next/navigation';

export default function Modal({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();
  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      dialogRef.current?.scrollTo({ top: 0 });
    }
  }, []);
  return createPortal(
    <dialog
      className={style.modalDefault}
      ref={dialogRef}
      onClose={() => router.back()}
      onClick={(e) => {
        if ((e.target as any).nodeName === 'DIALOG') router.back();
      }}
    >
      {children}
    </dialog>,
    document.querySelector('#mainModal') as HTMLElement
  );
}
