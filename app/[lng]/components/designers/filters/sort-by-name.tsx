'use client'

import { ArrowDownAZ, ArrowUpAZ } from "lucide-react"

interface SortByNameProps {
    title: string
    type: string
    sort: () => void
}

export const SortByName = ({ title, type, sort }: SortByNameProps) => {
    return (
        <button
            onClick={() => sort()}
            className="flex justify-center items-center gap-x-3 p-3 font-bold text-neutral-500 dark:text-neutral-400 bg-neutral-200 dark:bg-zinc-800 rounded-lg shadow-neumorphism-light dark:shadow-neumorphism-dark active:scale-[0.96] duration-200 ease-in-out"
        >
            <h1>{title}</h1>
            {type === 'username' ? (<ArrowDownAZ />) : (<ArrowUpAZ />)}
        </button>
    )
}