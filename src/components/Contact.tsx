import type { Translations } from "@/types/translations";
import ContactForm from "./ContactForm";

type Props = {
  t: Translations["contactForm"];
};

export default function Contact({ t }: Props) {
  return (
    <section id="contact" className="py-10 ms-auto max-w-[835px] px-2 md:px-4">
      <div className="max-w-[674px] w-full">
        <h2 className="text-5xl font-semibold leading-none mb-6 text-start text-text-primary">
          {t.heading}
        </h2>
        <ContactForm labels={t} />
      </div>
    </section>
  );
}
