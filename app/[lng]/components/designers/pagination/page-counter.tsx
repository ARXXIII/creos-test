'use client'

interface PageCounterProps {
    page: number
}

export const PageCounter = ({ page }: PageCounterProps) => {
    return (
        <div className="flex justify-center items-center w-12 h-12 font-bold text-neutral-500 dark:text-neutral-400 bg-neutral-200 dark:bg-zinc-800 rounded-lg shadow-neumorphism-light dark:shadow-neumorphism-dark">
            {page}
        </div>
    )
}