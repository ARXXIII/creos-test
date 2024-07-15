'use client'

import { useState } from "react"
import { ArrowDownAZ, ArrowUpAZ } from "lucide-react"

export const FilterByEmail = () => {
    const [filter, setFilter] = useState<'asc' | 'desc'>('asc')

    const handleOnClick = () => {
        if (filter === 'asc') {
            setFilter('desc')
        }

        if (filter === 'desc') {
            setFilter('asc')
        }
    }

    return (
        <button
            onClick={handleOnClick}
            className="flex justify-center items-center gap-x-3 p-3 font-bold text-neutral-500 dark:text-neutral-400 bg-neutral-200 dark:bg-zinc-800 rounded-xl shadow-neumorphism-light dark:shadow-neumorphism-dark active:scale-[0.96] duration-200 ease-in-out"
        >
            <h1>By email</h1>
            {filter === 'asc' ? (<ArrowDownAZ />) : (<ArrowUpAZ />)}
        </button>
    )
}