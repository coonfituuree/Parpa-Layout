"use client";
import { useState } from "react";

export function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full py-3 text-left font-medium"
        type="button"
      >
        {title}
      </button>
      {open && <div className="pb-4 text-sm text-zinc-700">{children}</div>}
    </div>
  );
}
