'use client'

import { Toggle } from "../toggle"
import { useEffect, useState } from "react"
import { useParams, usePathname, useRouter } from "next/navigation"

export const LangSwitcher = () => {
    const [isActive, setIsActive] = useState<boolean>(false)

    const route = useRouter()
    const params = useParams()
    const pathname = usePathname()

    const lng = params.lng

    const switchLang = () => {
        setTimeout(() => {
            const targetLang = lng === 'en' ? 'ru' : 'en';
            const newPath = pathname.replace(/\/(en|ru)(\/|$)/, `/${targetLang}$2`);

            route.push(newPath);
        }, 400, setIsActive(!isActive));
    }

    useEffect(() => {
        lng === 'en' ? setIsActive(true) : setIsActive(false)
    }, [lng])

    return (
        <Toggle type="lang" isActive={isActive} func={switchLang} />
    )
}