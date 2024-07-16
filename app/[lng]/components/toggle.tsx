'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { BadgeDollarSign, BadgeRussianRuble, Moon, Sun } from 'lucide-react'

interface ToggleProps {
    type: string
    isActive: boolean
    func: () => void
}

export const Toggle = ({ type, isActive, func, }: ToggleProps) => {

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
                className='flex justify-center items-center w-[32px] h-full font-semibold text-white bg-neutral-500 dark:bg-neutral-400 rounded-full'
            >
                {type === 'theme' && (
                    isActive ? <Moon /> : <Sun />
                )}
                {type === 'lang' && (
                    isActive ? <BadgeDollarSign /> : <BadgeRussianRuble />
                )}
            </motion.div>
        </div>
    )
}