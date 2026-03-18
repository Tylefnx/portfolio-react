import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import CustomNavbar from "@/shared/components/CustomNavbar";
import CustomDrawer from "@/shared/components/CustomDrawer";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "tayfunucuncu.dev",
  description: "Terminal Portfolio Website - Full Stack Mobile Engineer",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as never)) {
    notFound();
  }
  
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className={`${firaCode.variable} antialiased h-[100dvh]`}>
      <body className="h-[100dvh] overflow-hidden flex flex-col text-text bg-base font-sans m-0">
        <NextIntlClientProvider messages={messages}>
          <CustomNavbar />
          <CustomDrawer />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
