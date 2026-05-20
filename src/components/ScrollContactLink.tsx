"use client";

type Props = {
  label: string;
};

export default function ScrollContactLink({ label }: Props) {
  return (
    <a
      href="#contact"
      className="brand-gradient-border relative inline-flex items-center justify-center w-auto h-[42px] sm:h-[45px] rounded-pill px-4 sm:px-6 py-2 gap-2 font-bold text-sm sm:text-base whitespace-nowrap text-brand-gradient"
      onClick={(e) => {
        e.preventDefault();
        document
          .querySelector("#contact")
          ?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {label}
    </a>
  );
}
