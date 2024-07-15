import { dir } from 'i18next'
import { Nunito } from "next/font/google";
import { languages, fallbackLng } from '../i18n/settings'
import { useTranslation } from '../i18n'
import Header from './components/header/header'
import './globals.css'
import { ThemeProvider } from './components/theme-provider';

const nunito = Nunito({ subsets: ["latin"] });

export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }))
}

export async function generateMetadata({ params: { lng } }: {
    params: {
        lng: string;
    };
}) {
    if (languages.indexOf(lng) < 0) lng = fallbackLng
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = await useTranslation(lng)
    return {
        title: t('title'),
        content: 'Тестовое задание FrontEnd Junior'
    }
}

interface RootLayoutProps {
    children: React.ReactNode,
    params: { lng: string }
}

export default function RootLayout({
    children,
    params: {
        lng
    }
}: RootLayoutProps) {
    return (
        <html lang={lng} dir={dir(lng)}>
            <head />
            <body className={`${nunito.className} p-3 lg:px-24 lg:py-12 min-h-screen bg-neutral-200 dark:bg-zinc-800 overflow-x-hidden`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className='space-y-12'>
                        <Header lng={lng} />
                        <main className='space-y-12'>
                            {children}
                        </main>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}