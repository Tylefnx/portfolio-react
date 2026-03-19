import { routing } from '@/i18n/routing';
import ProjectsClient from '@/features/projects/components/ProjectsClient';
// @ts-ignore
import { setRequestLocale } from 'next-intl/server';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function ProjectsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Try to use setRequestLocale if available
  try {
    setRequestLocale(locale);
  } catch (e) {
    // If not available, just proceed
  }

  return <ProjectsClient />;
}
