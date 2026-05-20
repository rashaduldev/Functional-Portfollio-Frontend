import Image from "next/image";
import { RiPokerDiamondsLine } from "react-icons/ri";
import education from "../../public/assets/icons/Education.svg";
import work from "../../public/assets/icons/work-history.svg";
import type {
  EducationItem,
  Translations,
  WorkHistoryItem,
} from "@/types/translations";

type Props = {
  t: Pick<
    Translations,
    "resume" | "educationTitle" | "workHistoryTitle" | "education" | "workHistory"
  >;
  isRTL: boolean;
};

export default function Resume({ t, isRTL }: Props) {
  return (
    <section id="resume" className="py-10">
      <div className={`max-w-[835px] ${isRTL ? "mr-auto" : "ml-auto"}`}>
        <h2
          className={`text-5xl font-bold leading-none tracking-normal mb-6 ${
            isRTL ? "text-right mr-2" : "text-left ml-2"
          }`}
        >
          {t.resume || "Resume"}
        </h2>

        <section className="max-w-[685px] mb-14">
          <header
            className={`flex items-center gap-2 mb-6 ml-[6px] ${
              isRTL ? "text-right ml-2" : "text-left mr-2"
            }`}
          >
            <div className="w-8 h-8 bg-surface-elevated flex items-center justify-center rounded">
              <Image
                width={18}
                height={18}
                className="w-[18px] h-[18px]"
                src={education.src}
                alt="Education Icon"
              />
            </div>
            <h3 className="font-bold text-2xl leading-none">
              {t.educationTitle || "Education"}
            </h3>
          </header>

          <Timeline data={t.education} type="education" isRTL={isRTL} />
        </section>

        <section className="max-w-[685px]">
          <header
            className={`flex items-center gap-2 mb-6 ${
              isRTL ? "text-right mr-2" : "ml-2"
            }`}
          >
            <div className="w-8 h-8 bg-surface-elevated flex items-center justify-center rounded">
              <Image
                width={18}
                height={18}
                className="w-[18px] h-[18px]"
                src={work.src}
                alt="Work Icon"
              />
            </div>
            <h3 className="text-2xl font-semibold">
              {t.workHistoryTitle || "Work History"}
            </h3>
          </header>
          <Timeline data={t.workHistory} type="work" isRTL={isRTL} />
        </section>
      </div>
    </section>
  );
}

type TimelineProps = {
  data: EducationItem[] | WorkHistoryItem[];
  type: "education" | "work";
  isRTL: boolean;
};

function Timeline({ data, type, isRTL }: TimelineProps) {
  return (
    <div className={`relative ${isRTL ? "pr-10" : "pl-10"}`}>
      <div
        className={`absolute ${
          isRTL ? "right-4" : "left-4"
        } top-0 bottom-0 flex flex-col items-center z-0 border-y-4 rounded-full border-divider -mt-2.5`}
      >
        <div className="relative flex flex-col items-center h-full">
          <div className="flex gap-[5px] h-full bg-surface-section">
            <div className="w-[3px] bg-divider" />
            <div className="w-[3px] bg-divider" />
          </div>
        </div>
      </div>

      {data.map((item, index) => (
        <div
          key={index}
          className="mb-12 relative z-10 animate-fadeInUp transition-opacity duration-700 ease-out"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div
            className={`absolute top-0 flex items-center justify-center ${
              isRTL ? "-right-[29px]" : "-left-[29px]"
            }`}
          >
            <div className="absolute w-3 h-3 bg-surface-section rounded-full z-0" />
            <RiPokerDiamondsLine className="rotate-90 text-[22px] text-divider relative z-10" />
          </div>

          <span className="inline-block border min-w-[87px] min-h-[26px] border-overlay-white-20 p-1.5 rounded text-text-primary font-mono mb-2 font-bold text-sm leading-none">
            {item.period}
          </span>
          <div
            className={`bg-surface-card max-w-[646px] min-h-[154px] p-4 rounded-lg border border-overlay-white-10 shadow-md transition-all duration-300 hover:border-divider hover:shadow-yellow-500/20 ${
              isRTL ? "text-right" : "text-left"
            }`}
          >
            <h4 className="font-bold text-lg leading-none text-brand-gradient">
              {type === "education"
                ? (item as EducationItem).university
                : (item as WorkHistoryItem).company}
            </h4>
            <p className="font-normal text-xs leading-none my-2 text-text-muted-3 mb-2">
              {type === "education"
                ? (item as EducationItem).degree
                : (item as WorkHistoryItem).role}
            </p>
            <hr className="border-divider my-3" />
            <p className="font-normal text-base leading-relaxed text-text-muted">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
