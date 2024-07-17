import { dir } from 'i18next'
import { Metadata } from 'next';
import { Nunito } from "next/font/google";
import { languages } from '../i18n/settings'
import { Footer } from './components/footer';
import Header from './components/header/header'
import { ThemeProvider } from './components/theme-provider';
import './globals.css'

const nunito = Nunito({ subsets: ["latin"] });

export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }))
}

export const metadata: Metadata = {
    title: "Creos CRM",
    description: "Тестовое задание FrontEnd Junior",
};

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
            <body className={`${nunito.className}`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className='flex flex-col justify-between gap-y-12 p-3 lg:px-12 xl:px-24 lg:py-12 min-h-screen bg-neutral-200 dark:bg-zinc-800 overflow-x-hidden'>
                        <div className='space-y-12'>
                            <Header lng={lng} />
                            <main className='space-y-12'>
                                {children}
                            </main>
                        </div>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}