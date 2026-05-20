import type { Skill, Translations } from "@/types/translations";

type Props = {
  t: Translations["skills"];
  isRTL: boolean;
};

export default function Skills({ t, isRTL }: Props) {
  const skills: Skill[] = t.skillsList || [];

  return (
    <section
      id="skills"
      className={`py-10 max-w-[835px] ${isRTL ? "mr-auto" : "ml-auto"}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-[706px]">
        <h2
          className={`font-bold text-5xl leading-none tracking-normal mb-6 ${
            isRTL ? "text-right mr-2" : "text-left ml-2"
          }`}
        >
          {t.skillsTitle || "Skills"}
        </h2>
        <ul className="space-y-5 px-2 md:px-4">
          {skills.map((skill, idx) => (
            <li key={idx}>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-2xl leading-snug mb-2">
                  {skill.name}
                </span>
                <span className="font-medium text-xl leading-snug text-center text-brand-gradient">
                  {skill.value}%
                </span>
              </div>
              <div
                className="bg-surface-skill-track h-4 rounded-2xl max-w-[670px] overflow-hidden relative"
                role="progressbar"
                aria-valuenow={skill.value}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${skill.name} skill proficiency is ${skill.value} percent`}
              >
                <div
                  className="bg-brand-gradient skill-bar-fill h-full rounded-full absolute top-0 bottom-0"
                  style={
                    {
                      "--skill-progress": `${skill.value}%`,
                      [isRTL ? "right" : "left"]: 0,
                    } as React.CSSProperties
                  }
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
