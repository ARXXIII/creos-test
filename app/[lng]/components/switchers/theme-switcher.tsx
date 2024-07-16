'use client'

import { Toggle } from "../toggle"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export const ThemeSwitcher = () => {

    const { theme, setTheme, } = useTheme()

    const [isActive, setIsActive] = useState<boolean>(false)

    const switchTheme = () => {

        if (isActive) {
            setTheme("light")
        } else {
            setTheme("dark")
        }

        setIsActive(!isActive)
    }

    useEffect(() => {
        theme === 'dark' ? setIsActive(true) : setIsActive(false)
    }, [theme])

    return (
        <Toggle type="theme" isActive={isActive} func={() => switchTheme()} />
    )
}