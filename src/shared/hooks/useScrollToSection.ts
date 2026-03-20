import { useCallback } from 'react';
import { usePathname, useRouter } from '@/i18n/routing';

export function useScrollToSection() {
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = useCallback((index: number) => {
    if (pathname !== '/') {
      router.push('/');
      // We might need a small delay or a way to signal to the home page to scroll after navigation
      // But for simple scroll-into-view on the same page:
      return;
    }

    const sections = document.querySelectorAll('section');
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [pathname, router]);

  return { scrollToSection };
}
