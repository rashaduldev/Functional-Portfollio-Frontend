"use client";

import { useState } from "react";
import { FaLink } from "react-icons/fa";
import Image from "next/image";
import type { PortfolioItem } from "@/types/translations";

type Props = {
  title: string;
  categories: string[];
  items: PortfolioItem[];
  isRTL: boolean;
};

export default function Portfolio({ title, categories, items, isRTL }: Props) {
  const [activeCategory, setActiveCategory] = useState("All");

  const dynamicItems = items.filter((item) => !item.static);
  const staticItems = items.filter((item) => item.static);

  const filteredItems =
    activeCategory === "All"
      ? dynamicItems
      : dynamicItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="portfolio"
      className={`py-10 lg:px-0 max-w-[950px] w-full ${
        isRTL ? "mr-auto" : "ml-auto"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-[688px] mx-auto">
        <h2
          className={`font-bold text-5xl leading-none mb-8 text-text-primary ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {title}
        </h2>

        <nav
          className={`mb-8 bg-black rounded-md overflow-x-auto min-h-[60px] shadow-card ${
            isRTL ? "pr-10" : "pl-10"
          } scrollbar-hide`}
          aria-label="Portfolio Categories"
        >
          <div className="flex w-max gap-4 px-4 py-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-normal text-base leading-none p-3 whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? "border-b-2 text-brand-yellow-ring border-b-brand-yellow-ring"
                    : "text-text-primary border-overlay-white-20"
                }`}
                aria-pressed={activeCategory === cat}
                type="button"
              >
                {cat}
              </button>
            ))}
          </div>
        </nav>

        <div className="columns-1 sm:columns-2 gap-4 space-y-4 max-w-[674px]">
          {filteredItems.map((item) => (
            <div key={item.id} className="break-inside-avoid">
              <div className="relative group overflow-hidden bg-black">
                {item.image && (
                  <Image
                    height={400}
                    width={400}
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                )}

                <div
                  className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-text-primary p-4"
                  style={{ direction: isRTL ? "rtl" : "ltr" }}
                >
                  <a
                    href={item.live ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`absolute top-2 ${
                      isRTL ? "left-2" : "right-2"
                    } z-50 bg-black text-text-primary hover:text-text-muted rounded-full h-8 w-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-soft`}
                    aria-label={`More info about ${item.title}`}
                  >
                    <FaLink className="text-text-primary text-base w-4 h-4 pointer-events-none" />
                  </a>

                  <h3 className="font-bold text-xl text-center mb-2">
                    {item.title}
                  </h3>
                  <p className="font-normal text-base text-text-muted-3 text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 max-w-[674px]">
          {staticItems.map((item) => (
            <div
              key={item.id}
              className="bg-black p-6 max-h-[204px] md:max-w-[332px] text-text-primary relative flex flex-col justify-center items-center"
              style={{ height: 300 }}
            >
              <h3
                className={`text-lg font-semibold mb-2 ${
                  isRTL ? "text-center" : "text-left"
                }`}
              >
                {item.title}
              </h3>
              <p className="text-sm text-text-muted/70 text-left">
                {item.description}
              </p>

              <a
                href={item.live ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={`absolute top-2 ${
                  isRTL ? "left-2" : "right-2"
                } z-50 bg-black text-text-primary hover:text-text-muted rounded-full h-8 w-8 flex items-center justify-center opacity-100 transition-opacity duration-300 shadow-soft`}
                aria-label={`More info about ${item.title}`}
              >
                <FaLink className="text-text-primary text-base w-4 h-4 pointer-events-none" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
