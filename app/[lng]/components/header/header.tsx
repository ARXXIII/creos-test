'use client'

import Link from "next/link"

import { Navbar } from "../nav/navbar"
import { LangSwitcher } from "../switchers/lang-switcher"
import { ThemeSwitcher } from "../switchers/theme-switcher"

const Header = ({ lng }: { lng: string }) => {
    return (
        <header className="flex justify-between gap-x-6 relative">
            <Link href='/' className="hidden lg:block font-black text-5xl">Creos</Link>
            <div className="flex items-start gap-x-6">
                <LangSwitcher />
                <ThemeSwitcher />
            </div>
            <Navbar lng={lng} />
        </header>
    )
}

export default Header