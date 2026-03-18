import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("about.header");
  return (
    <section className="h-[100dvh] w-full snap-start snap-always flex flex-col items-center justify-center p-8 bg-mantle">
      <h2 className="text-3xl text-text font-bold text-center">
        {t("title")}
      </h2>
      <p className="mt-4 text-center max-w-2xl text-subtext0">
        {t("description")}
      </p>
    </section>
  );
}
