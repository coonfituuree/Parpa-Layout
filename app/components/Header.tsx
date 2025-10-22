"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [mobileCatalogOpen, setMobileCatalogOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const categories = [
    {
      label: "Bedroom",
      href: "/bedroom",
      sub: [
        { label: "Bedding", href: "/bedroom/bedding" },
        { label: "Quilts", href: "/bedroom/quilts" },
      ],
    },
    {
      label: "Bathroom",
      href: "/bathroom",
      sub: [
        { label: "Towels", href: "/bathroom/towels" },
        { label: "Bathrobes", href: "/bathroom/bathrobes" },
      ],
    },
  ];
  return (
    <header className="flex items-center justify-between py-4 px-4 sm:px-8">
      <Link href="/">
        <div className="hidden md:block">
          <Image src="/logo.svg" alt="Full logo" width={145} height={40} />
        </div>
        <div className="block md:hidden">
          <Image src="/monogram.svg" alt="Icon logo" width={40} height={40} />
        </div>
      </Link>

      <nav className="hidden ml-8 xs:flex items-center gap-4 sm:gap-8 lg:gap-10">
        <div className="hidden sm:block cursor-pointer">Menu</div>
        <div className="relative group hidden sm:block">
          <div className="hidden sm:block cursor-pointer">Catalog</div>
          <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md mt-[2px] py-3 w-48 z-50">
            <ul className="space-y-3">
              <li className="group/sub">
                <Link
                  href="/catalog/bedroom"
                  className="hover:text-gray-600 px-4 cursor-pointer flex justify-between items-center"
                >
                  Bedroom
                </Link>
                <div className="absolute top-0 left-full hidden group-hover/sub:block bg-white shadow-lg rounded-md py-3 w-48 z-50">
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/catalog/bedroom/bedding"
                        className="hover:text-gray-600 cursor-pointer px-4"
                      >
                        Bedddings
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/catalog/bedroom/bedspreads"
                        className="hover:text-gray-600 cursor-pointer px-4"
                      >
                        Bedspreads
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="hover:text-gray-600 cursor-pointer px-4 ">Bathroom</li>
            </ul>
          </div>
        </div>

        <Link
          href="https://api.whatsapp.com/send?phone=7067066500"
          target="_blank"
          className="hidden sm:block"
        >
          + 706 706 65 00
        </Link>
      </nav>
      <div className="flex items-center gap-4 sm:gap-6">
        <Link href="/search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000000"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
        </Link>{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000"
        >
          {" "}
          <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />{" "}
        </svg>{" "}
        <Link href="/auth">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000000"
          >
            {" "}
            <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />{" "}
          </svg>
        </Link>{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000"
        >
          {" "}
          <path d="M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720h80q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm0-80h560v-480H200v480Zm280-240q83 0 141.5-58.5T680-600h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85h-80q0 83 58.5 141.5T480-400ZM360-720h240q0-50-35-85t-85-35q-50 0-85 35t-35 85ZM200-160v-480 480Z" />{" "}
        </svg>{" "}
        <div className="mt-2">
          {mobileCatalogOpen ? (
            <button onClick={() => setMobileCatalogOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000"
                className="lg:hidden sm:block"
              >
                <path d="M256-200 200-256l224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </button>
          ) : (
            <button onClick={() => setMobileCatalogOpen(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000"
                className="lg:hidden sm:block"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </button>
          )}
        </div>
      </div>
      {mobileCatalogOpen && (
        <div className="fixed inset-0 bg-white z-50 p-6 overflow-y-auto">
          <ul className="space-y-4 text-lg">
            {categories.map((cat) => (
              <li key={cat.label}>
                <button
                  className="w-full text-left font-medium block py-2"
                  onClick={() =>
                    setOpenSubMenu(openSubMenu === cat.label ? null : cat.label)
                  }
                >
                  {cat.label}
                  {cat.sub && (
                    <span className="float-right">
                      {openSubMenu === cat.label ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          fill="#000000"
                        >
                          <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          fill="#000000"
                        >
                          <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                        </svg>
                      )}
                    </span>
                  )}
                </button>
                {/* Подкатегории */}
                {cat.sub && openSubMenu === cat.label && (
                  <ul className="pl-4 mt-2 space-y-2 text-base">
                    {cat.sub.map((sub) => (
                      <li key={sub.label}>
                        <Link
                          href={sub.href}
                          onClick={() => {
                            setMobileCatalogOpen(false);
                            setOpenSubMenu(null);
                          }}
                          className="block py-1 hover:underline"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                {/* Ссылка на саму категорию */}
                {!cat.sub && (
                  <Link
                    href={cat.href}
                    onClick={() => setMobileCatalogOpen(false)}
                    className="block py-2 hover:underline"
                  >
                    {cat.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
