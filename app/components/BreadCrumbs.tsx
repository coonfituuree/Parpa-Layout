"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return null;

  return (
    <nav className="text-sm text-gray-500 flex items-center gap-2 mb-4">
      <Link href="/" className="hover:underline">
        Parpa
      </Link>

      {segments.map((seg, i) => {
        const href = "/" + segments.slice(0, i + 1).join("/");
        const isLast = i === segments.length - 1;

        return (
          <div key={i} className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="13px"
              viewBox="0 -960 960 960"
              width="13px"
              fill="#333333"
            >
              <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
            </svg>
            {isLast ? (
              <span className="capitalize text-gray-700">
                {decodeURIComponent(seg)}
              </span>
            ) : (
              <Link href={href} className="hover:underline capitalize">
                {decodeURIComponent(seg)}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
