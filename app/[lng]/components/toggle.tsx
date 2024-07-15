'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface ToggleProps {
    isActive: boolean
    func: () => void
}

export const Toggle = ({ isActive, func, }: ToggleProps) => {

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 40
    };

    return (
        <div
            onClick={func}
            className={cn('flex justify-start items-center relative p-2 w-24 h-12 bg-neutral-200 dark:bg-zinc-800 shadow-neumorphism-light dark:shadow-neumorphism-dark rounded-full cursor-pointer duration-200 ease-in-out overflow-hidden',
                isActive && 'justify-end'
            )}
        >
            <motion.div
                layout
                transition={spring}
                className='w-[32px] h-full bg-black dark:bg-white rounded-full'
            />
        </div>
    )
}