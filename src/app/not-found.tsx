import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "@/lib/i18n";

export default async function NotFound() {
  const { t, isRTL } = await getTranslations();

  return (
    <main
      dir={isRTL ? "rtl" : "ltr"}
      className="flex flex-col items-center justify-center min-h-screen bg-surface-page text-text-primary p-4 text-center"
    >
      <Image
        src="https://res.cloudinary.com/de8yddexc/image/upload/v1747288109/resume/nw1t97hoccwxtzxrbp2i.svg"
        alt="404 Not Found"
        width={400}
        height={400}
        className="mx-auto"
      />

      <h1 className="text-4xl md:text-6xl font-bold mt-4">
        404 - {t.notFound?.title || "Page Not Found"}
      </h1>

      <p className="mt-4 text-text-muted max-w-lg">
        {t.notFound?.description ||
          "Sorry, the page you are looking for doesn't exist or has been moved."}
      </p>

      <Link
        href="/"
        className="mt-6 inline-block bg-brand-gradient hover:opacity-90 text-text-primary px-6 py-2 rounded-pill text-sm font-medium transition"
      >
        {t.notFound?.backToHome || "Go Back Home"}
      </Link>
    </main>
  );
}
