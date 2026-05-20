import Link from "next/link";
import Image from "next/image";
import img1 from "../../public/assets/icons/Line 120.svg";
import type { BlogItem } from "@/types/translations";

type Props = {
  items: BlogItem[];
  title: string;
  isRTL: boolean;
};

const truncateDescription = (text: string, wordLimit = 13): string => {
  const words = text.trim().split(/\s+/);
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
};

export default function Blog({ items, title, isRTL }: Props) {
  return (
    <section
      id="blogs"
      className={`py-14 lg:px-0 max-w-[964px] w-full ${
        isRTL ? "mr-auto" : "ml-auto"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-[674px] mx-auto">
        <h2
          className={`font-bold text-5xl leading-none mb-8 text-text-primary ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {title || "Blog"}
        </h2>

        <div className="columns-1 sm:columns-2 gap-6 space-y-6">
          {items.map((item) => (
            <Link key={item.id} href={`/blog/${item.id}`}>
              <article className="group cursor-pointer overflow-hidden border border-divider bg-surface-card mb-10 rounded-md">
                <Image
                  width={400}
                  height={400}
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-6 text-text-primary space-y-3">
                  <p className="font-normal text-xs opacity-70">
                    {item.category} | {item.date}
                  </p>
                  <h3 className="text-lg font-bold leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm font-normal opacity-70 leading-snug">
                    {truncateDescription(item.description)}
                  </p>
                  <p className="flex items-center gap-2 text-sm font-normal leading-snug">
                    <Image
                      width={4}
                      height={4}
                      className="w-4"
                      src={img1.src}
                      alt=""
                    />
                    Posted By {item.author}
                    <Image
                      width={4}
                      height={4}
                      className="w-4"
                      src={img1.src}
                      alt=""
                    />
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
