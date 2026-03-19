import { routing } from '@/i18n/routing';
import TerminalClient from '@/features/terminal/components/TerminalClient';
import { setRequestLocale } from 'next-intl/server';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function TerminalPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <TerminalClient />;
}

