'use client'

import Link from "next/link"

import { Navbar } from "../nav/navbar"
import { addHours, getISOWeek } from "date-fns"
import { useTranslation } from "@/app/i18n/client"
import { LangSwitcher } from "../switchers/lang-switcher"
import { ThemeSwitcher } from "../switchers/theme-switcher"

const Header = ({ lng }: { lng: string }) => {
    const { t } = useTranslation(lng, 'header')

    const adjustedDate = addHours(new Date(), 11);

    const currentWorkWeek = getISOWeek(adjustedDate)

    return (
        <header className="flex justify-between gap-x-3 lg:gap-x-6 relative">
            <Link href='/' className="hidden md:block font-black text-neutral-500 dark:text-neutral-400 text-5xl">Creos</Link>
            <div className="hidden md:flex items-center gap-x-3">
                <h1 className="font-semibold text-neutral-500 dark:text-neutral-400">{t('currentWorkWeek')}</h1>
                <div className="flex justify-center items-center w-12 h-12 rounded-lg shadow-neumorphism-light dark:shadow-neumorphism-dark">
                    <p className="font-semibold">{currentWorkWeek}</p>
                </div>
            </div>
            <div className="flex items-start gap-x-6">
                <LangSwitcher />
                <ThemeSwitcher />
            </div>
            <Navbar currentWorkWeek={currentWorkWeek} lng={lng} />
        </header>
    )
}

export default Header