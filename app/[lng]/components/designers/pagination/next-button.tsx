'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from "lucide-react"

interface PrevButtonProps {
    url: string
    next: () => void
}

export const NextButton = ({ url, next }: PrevButtonProps) => {

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
            onClick={() => next()}
            className="flex justify-center items-center p-3 text-neutral-500 dark:text-neutral-400 bg-neutral-200 dark:bg-zinc-800 rounded-lg shadow-neumorphism-light dark:shadow-neumorphism-dark"
        >
            <ChevronRight />
        </motion.button>
    )
}