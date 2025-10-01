"use client";

import React, { useState, useEffect } from "react";
import Breadcrumbs from "@/app/components/BreadCrumbs";
import { products } from "../.../../../data/products";
import type { Product } from "../../.../../types/product";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const router = useRouter();

  // Функция поиска с дебаунсом
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery.trim()) {
        setIsSearching(true);
        const filteredProducts = products.filter(
          (product) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) ||
            product.badges.some((badge) =>
              badge.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
        setSearchResults(filteredProducts);
        setShowResults(true);
        setIsSearching(false);
      } else {
        setSearchResults([]);
        setShowResults(false);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const handleMore = (productId: number) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      console.log("More details for product:", product);
      router.push(
        `/bedroom/bedding/${product.title.toLowerCase().replace(/\s+/g, "-")}`
      );
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Поиск:", searchQuery);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setShowResults(false);
  };

  return (
    <main className="container mx-auto px-4 lg:px-[16px] py-6 lg:py-[12px]">
      <Breadcrumbs />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif text-zinc-900 mb-2">
            Search for products
          </h1>
          <p className="text-zinc-500">
            Find the perfect bedding for your home
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#71717a"
                className="text-zinc-500"
              >
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
              </svg>
            </div>

            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              className="w-full h-12 pl-12 pr-12 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#c2a592] focus:border-transparent text-zinc-900 placeholder-zinc-400"
              placeholder="Search by name, description, or characteristics..."
            />

            {searchQuery && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-400 hover:text-zinc-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18px"
                  viewBox="0 -960 960 960"
                  width="18px"
                  fill="currentColor"
                >
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </button>
            )}
          </div>
        </form>

        {showResults && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-serif text-zinc-900">
                Результаты поиска
              </h2>
              <span className="text-sm text-zinc-500">
                Found: {searchResults.length} items
              </span>
            </div>

            {isSearching ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#c2a592]"></div>
              </div>
            ) : searchResults.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg border border-zinc-200 overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-square bg-zinc-100 relative">
                      {product.images && product.images.length > 0 ? (
                        <img
                          src={product.images[0]}
                          alt={product.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-zinc-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="48px"
                            viewBox="0 -960 960 960"
                            width="48px"
                            fill="currentColor"
                          >
                            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z" />
                          </svg>
                        </div>
                      )}
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                          <span className="text-white text-sm font-medium">
                            Out of stock
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-4">
                      <h3 className="font-serif text-lg text-zinc-900 mb-2 line-clamp-2">
                        {product.title}
                      </h3>

                      <p className="text-sm text-zinc-500 mb-3 line-clamp-2">
                        {product.description}
                      </p>

                      <div className="flex items-center justify-between mb-3">
                        <div className="text-lg font-medium text-zinc-900">
                          from {product.priceFrom.toLocaleString("en-EN")} $
                        </div>
                        <div
                          className={`text-xs ${
                            product.inStock
                              ? "text-emerald-600"
                              : "text-red-500"
                          }`}
                        >
                          {product.inStock ? "In stock" : "Out of stock"}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {product.badges.slice(0, 2).map((badge, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-zinc-100 text-zinc-600 text-xs rounded"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => handleMore(product.id)}
                        className="w-full h-10 rounded bg-[#c2a592] cursor-pointer hover:bg-[#be9b84] text-white text-sm transition-colors"
                      >
                        More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-zinc-400 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="64px"
                    viewBox="0 -960 960 960"
                    width="64px"
                    fill="currentColor"
                    className="mx-auto"
                  >
                    <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif text-zinc-900 mb-2">
                  Nothing Found
                </h3>
                <p className="text-zinc-500 mb-4">
                  Try changing your search query or using different keywords.
                </p>
                <button
                  onClick={clearSearch}
                  className="px-4 py-2 text-sm text-[#c2a592] hover:underline"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        )}

        {/* Популярные запросы или категории */}
        {!showResults && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-serif text-zinc-900 mb-4">
                Popular categories
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Bedding sets",
                  "Pillows",
                  "Blankets",
                  "Sheets",
                  "Pillowcases",
                ].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSearchQuery(category)}
                    className="px-4 py-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-sm rounded-full transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-serif text-zinc-900 mb-4">
                Popular searches
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Coton",
                  "Satin",
                  "Linen",
                  "Family Set",
                  "Children's underwear",
                ].map((query) => (
                  <button
                    key={query}
                    onClick={() => setSearchQuery(query)}
                    className="px-4 py-2 border border-zinc-200 hover:border-[#c2a592] text-zinc-700 text-sm rounded-full transition-colors"
                  >
                    {query}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Search;
