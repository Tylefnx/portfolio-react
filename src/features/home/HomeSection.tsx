import { useTranslations } from "next-intl";

export default function HomeSection() {
  const t = useTranslations("home");
  return (
    <section className="h-[100dvh] w-full snap-start snap-always flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl text-text font-bold text-center">
        {t("heroTitle")}
      </h1>
      <p className="mt-4 text-center max-w-2xl text-subtext0">
        {t("heroDescription")}
      </p>
    </section>
  );
}
