'use client';

import Image from 'next/image';
import menu from '@/public/menu.svg';
import { PropsWithChildren, useRef, useEffect } from 'react';
import NavLinks from './NavLinks';
import xmark from '@/public/xmark.svg';

export default function DrawerMenu({
  className,
}: PropsWithChildren<{ className?: string }>) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function openDialog() {
    dialogRef.current?.showModal();
  }

  function closeDialog() {
    dialogRef.current?.close();
  }

  useEffect(() => {
    const handleBackdropClick = (e: MouseEvent) => {
      if (dialogRef.current && dialogRef.current.open) {
        const dialogDimensions = dialogRef.current.getBoundingClientRect();
        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ) {
          closeDialog();
        }
      }
    };

    document.addEventListener('click', handleBackdropClick);
    return () => {
      document.removeEventListener('click', handleBackdropClick);
    };
  }, []);

  return (
    <div className={className}>
      <button type="button" onClick={openDialog}>
        <Image priority src={menu} width={40} height={40} alt="Menu" />
      </button>
      <dialog
        ref={dialogRef}
        className="my-0 mr-0 h-full max-h-screen w-[300px] justify-between bg-background p-0 text-foreground"
      >
        <button
          className="ml-auto mr-[25px] mt-[25px] block text-accent"
          onClick={closeDialog}
        >
          <Image src={xmark} alt="Close Sidebar" />
        </button>
        <h2
          id="dialog-title"
          className="mb-32 mt-32 text-center text-4xl font-semibold"
        >
          Politis<span className="text-accent">.</span>
        </h2>
        <NavLinks className="flex flex-col items-center justify-center gap-8 text-xl" />
      </dialog>
    </div>
  );
}
