"use client";
import Image from "next/image";

export default function ProductGallery({ images }: { images: string[] }) {
  return (
    <div className="space-y-4">
      {images.map((src, i) => (
        <div
          key={i}
          className="relative lg:w-[520px] lg:h-[521px] xs:w-[360px] xs:h-[360px] aspect-[4/3] overflow-hidden rounded"
        >
          <Image src={src} alt="" fill className="object-cover" />
        </div>
      ))}
    </div>
  );
}
