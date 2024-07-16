'use client'

import { motion } from 'framer-motion'
import { ChevronLeft } from "lucide-react"

interface PrevButtonProps {
    url: string
    prev: () => void
}

export const PrevButton = ({ url, prev }: PrevButtonProps) => {

    const button = {
        open: {
            scale: 1
        },
        close: {
            scale: 0
        }
    }

    return (
        <motion.button
            variants={button}
            initial='close'
            animate={url ? 'open' : 'close'}
            onClick={() => prev()}
            className="flex justify-center items-center p-3 text-neutral-500 dark:text-neutral-400 bg-neutral-200 dark:bg-zinc-800 rounded-lg shadow-neumorphism-light dark:shadow-neumorphism-dark"
        >
            <ChevronLeft />
        </motion.button>
    )
}