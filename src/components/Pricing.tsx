import Image from "next/image";
import pricing from "../../public/assets/icons/pricing.svg";
import type { Plan, Translations } from "@/types/translations";

type Props = {
  t: Translations["pricing"];
  isRTL: boolean;
};

export default function Pricing({ t, isRTL }: Props) {
  const plans: Plan[] = t.plans;

  return (
    <section
      className={`py-10 max-w-[835px] md:px-4 ${
        isRTL ? "ml-0 mr-auto" : "ml-auto mr-0"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-[674px]">
        <h2
          className={`text-4xl font-semibold mb-10 text-text-primary ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {t.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative bg-black text-text-primary p-6 overflow-hidden"
            >
              <div
                className={`absolute top-0 bottom-0 h-[124px] w-[140px] opacity-10 pointer-events-none z-0 ${
                  isRTL ? "left-0" : "right-0"
                }`}
              >
                <Image
                  src={pricing}
                  alt="Pricing background"
                  width={140}
                  height={124}
                  className={`object-contain ${
                    isRTL ? "object-left" : "object-right"
                  }`}
                />
              </div>

              <div
                className={`mb-4 z-10 relative ${
                  isRTL ? "me-[-24px]" : "ms-[-24px]"
                }`}
              >
                <span
                  className={`inline-block bg-brand-soft text-text-primary text-sm font-medium px-6 py-3 ${
                    isRTL
                      ? "rounded-l-pill rounded-r-none md:-mr-8"
                      : "rounded-r-pill rounded-l-none"
                  }`}
                >
                  {plan.title}
                </span>
              </div>

              <div
                className={`text-3xl font-bold mb-1 z-10 relative ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {plan.price}{" "}
                <span className="text-base font-normal">/ {t.month}</span>
              </div>

              <ul
                className={`my-6 space-y-2 bg-surface-card p-4 font-normal text-base leading-snug z-10 relative ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={
                      feature.available
                        ? "text-text-primary"
                        : "text-text-disabled line-through"
                    }
                  >
                    {feature.label}
                  </li>
                ))}
              </ul>

              <div className={isRTL ? "text-right" : "text-left"}>
                <button
                  type="button"
                  className="pricing-cta px-6 py-3 rounded-lg z-10 relative cursor-pointer"
                >
                  {t.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
