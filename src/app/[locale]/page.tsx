import { routing } from '@/i18n/routing';
import HomeClient from '@/features/home/components/HomeClient';
import { setRequestLocale } from 'next-intl/server';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function PortfolioPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeClient />;
}
