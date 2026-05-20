import "./globals.css";
import type { Metadata } from "next";
import { dmSans } from "./fonts";
import Providers from "@/components/Providers";
import { getLanguage } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Md Rashadul Islam – Portfolio",
  description: "Frontend Developer Portfolio",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const language = await getLanguage();
  const isRTL = language === "ar";

  return (
    <html
      lang={language}
      dir={isRTL ? "rtl" : "ltr"}
      className={dmSans.variable}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col font-sans">
        <Providers>
          <main className="min-h-screen bg-surface-page">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
