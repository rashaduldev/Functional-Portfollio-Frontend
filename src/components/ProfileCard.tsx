import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import handsomeimage from "../../public/assets/handsome.png";
import download from "../../public/assets/icons/download.svg";
import home from "../../public/assets/icons/Home.svg";
import img1 from "../../public/assets/icons/active-home.svg";
import img2 from "../../public/assets/icons/profile-about.svg";
import img3 from "../../public/assets/icons/portfolio.svg";
import img4 from "../../public/assets/icons/blog.svg";
import img5 from "../../public/assets/icons/contact.svg";
import type { Translations } from "@/types/translations";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import ScrollContactLink from "./ScrollContactLink";

const socialLinks = [
  { icon: <FaFacebookF />, url: "facebook.com" },
  { icon: <FaTwitter />, url: "x.com" },
  { icon: <FaLinkedinIn />, url: "linkedin.com" },
  { icon: <FaPinterestP />, url: "interest.com" },
  { icon: <FaGithub />, url: "github.com" },
];

const sideMenuIcons = [
  { img: img1, alt: "Home", href: "/" },
  { img: img2, alt: "Resume", href: "#resume" },
  { img: img3, alt: "Portfolio", href: "#portfolio" },
  { img: img4, alt: "Blogs", href: "#blogs" },
  { img: img5, alt: "Contact", href: "#contact" },
];

type Props = {
  t: Pick<Translations, "PROFILE" | "info">;
  language: string;
  isRTL: boolean;
};

export default function ProfileCard({ t, language, isRTL }: Props) {
  const PROFILEinfo = t.PROFILE;
  const info = t.info;

  const rtlStyles: React.CSSProperties = isRTL
    ? { direction: "rtl", fontSize: "12px", textAlign: "right" }
    : { direction: "ltr", fontSize: "14px", textAlign: "left" };

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className="flex justify-center items-start transition-colors duration-300"
    >
      <div className="w-full max-w-[1320px] relative z-10">
        <h1
          className={`absolute -top-10 ${
            isRTL ? "-right-20" : "-left-20"
          } text-7xl font-bold leading-none text-text-faded select-none pointer-events-none w-[257px] h-[90px] z-0`}
          dir={isRTL ? "rtl" : "ltr"}
        >
          {info.home || "Home"}
        </h1>

        <div
          className="w-full grid grid-cols-[36px_1fr] sm:grid-cols-[44px_1fr] md:grid-cols-[42px_368px_1fr] bg-surface-card text-text-primary px-3 sm:px-4 md:px-6 z-50 relative"
          dir={isRTL ? "rtl" : "ltr"}
        >
          <div></div>

          <div className="relative flex">
            <div
              className={`flex flex-col justify-center -ml-6 md:-ml-0 pr-3 py-3 sm:pr-4 sm:py-4 md:pr-6 md:py-4 w-full ${
                isRTL ? "rtl:ml-6 rtl:pr-0 ml-0 pr-3" : ""
              }`}
            >
              <h1 className="text-2xl sm:text-3xl md:text-[32px] font-bold leading-none flex items-center gap-1 sm:gap-2">
                {info.firstname || "Daryl"}
                <span className="text-brand-gradient">
                  {info.lastname || "Smith"}
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-text-muted-2 mt-1 sm:mt-2">
                {info.profession || "UI/UX designer"}
              </p>
            </div>
            <div
              className={`hidden md:block absolute right-0 top-0 bottom-0 w-px bg-divider ${
                isRTL ? "rtl:left-0 right-auto" : ""
              }`}
            />
          </div>

          <div
            className={`flex items-center justify-between w-[355px] md:w-full pl-3 sm:pl-4 md:pl-6 py-3 md:py-4 flex-wrap gap-3 ${
              isRTL ? "rtl:pr-3 pr-0" : ""
            }`}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-brand-gradient flex items-center justify-center text-text-primary p-1">
                <Image
                  height={20}
                  width={20}
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  src={home.src}
                  alt=""
                />
              </span>
              <span className="text-xl sm:text-2xl font-bold">
                {info.home || "Home"}
              </span>
            </div>
            <div
              className={`flex items-center gap-2 sm:gap-4 ${
                isRTL ? "rtl:flex-row" : "flex-row-reverse"
              }`}
            >
              <ThemeToggle />
              <ScrollContactLink label={info.talk_to_me || "Talk To Me"} />
            </div>
          </div>
        </div>

        <div
          dir={language === "ar" ? "rtl" : "ltr"}
          className="bg-surface-section grid grid-cols-1 md:grid-cols-[auto_68px_365px_1fr_68px_auto]"
        >
          <div className="hidden md:block relative w-full h-full overflow-hidden">
            <div className="absolute inset-0 z-0 bg-brand-gradient-diag-left" />
          </div>

          <div className="hidden md:flex relative max-w-[68px] w-full flex-col items-center justify-center py-8 overflow-hidden">
            <div className="absolute inset-0 z-0 bg-brand-gradient-diag-left" />
            <div className="relative z-10 flex flex-col gap-8">
              {sideMenuIcons.map((icon, i) => (
                <Link
                  key={i}
                  href={icon.href}
                  className="text-text-muted hover:text-brand-yellow-ring text-2xl cursor-pointer transition-transform duration-300 hover:scale-110 w-8 h-8"
                >
                  <Image
                    src={icon.img}
                    alt={icon.alt}
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-black w-full max-w-[368px] mx-auto flex flex-col justify-between items-center border border-transparent hover:border-brand-soft-strong transition-all duration-300">
            <div className="relative w-full h-[504px] overflow-hidden">
              <Image
                height={504}
                width={368}
                src={handsomeimage}
                alt="Daryl Smith"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex gap-2 py-4 px-4 flex-wrap justify-center w-full relative z-10 overflow-x-auto shadow-social">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  className="text-text-muted text-base p-2 bg-surface-card rounded-full transition duration-300 hover:scale-110"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div
            className={`flex flex-col w-full px-4 md:px-0 max-w-[611px] justify-center mt-10 md:mt-0 ${
              language === "ar" ? "text-right mr-12" : "text-left md:ml-12"
            }`}
          >
            <span className="font-bold text-sm md:text-base leading-none tracking-normal text-brand-gradient uppercase mb-2">
              {PROFILEinfo.INTRODUCTION}
            </span>
            <h1 className="text-3xl md:text-5xl leading-snug tracking-normal font-bold mb-4 text-text-primary">
              {PROFILEinfo.CREATIVE_ROLE}
            </h1>
            <p className="text-sm md:text-base font-bold leading-relaxed tracking-normal text-text-primary mb-4">
              {info.age} / {info.author} / {info.location}
            </p>
            <p className="text-text-muted my-5 text-sm md:text-base font-medium leading-snug tracking-normal mb-6 max-w-full">
              {info.description}
            </p>
            <a
              href="/assets/Resume of Md Rashadul Islam.pdf"
              download="Rashadul-Islam-CV.pdf"
              rel="noopener noreferrer"
              className="bg-brand-gradient mt-5 hover:opacity-90 text-text-primary w-fit px-6 py-3 rounded-pill font-bold text-base leading-none tracking-normal flex items-center gap-2.5 transition"
            >
              {PROFILEinfo.DOWNLOAD_CV}
              <Image
                height={18}
                width={20}
                className="w-5 h-[18px]"
                src={download.src}
                alt="download"
              />
            </a>
          </div>

          <div className="hidden md:flex relative max-w-[68px] w-full items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0 bg-brand-gradient-diag-right" />
            <div className="absolute top-10 inset-0 z-10 flex flex-col gap-32 justify-evenly items-center">
              <div
                className="rotate-90 origin-center text-text-muted whitespace-nowrap mt-24"
                style={{
                  fontWeight: 400,
                  lineHeight: "var(--leading-tight)",
                  letterSpacing: "var(--tracking-flat)",
                  ...rtlStyles,
                }}
              >
                {info.copy_right ||
                  "© design by themefisher developed by gethugothemes"}
              </div>
              <LanguageSwitcher current={language} />
            </div>
          </div>

          <div className="hidden md:block" />
        </div>
      </div>
    </div>
  );
}
