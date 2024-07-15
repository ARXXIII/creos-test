'use client'

import { UserAvatar } from "./avatar"
import { motion } from 'framer-motion'

interface CommentProps {
    name: string
    img?: string
    task: string
    message: string
    time: string
}

export const Comment = ({ name, img, task, message, time }: CommentProps) => {
    const initial = name.split('').shift()

    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="space-y-6 p-3 bg-neutral-200 dark:bg-zinc-800 rounded-xl shadow-neumorphism-light dark:shadow-neumorphism-dark"
        >
            <div className="flex items-center gap-x-3">
                <UserAvatar initial={initial!} img={img} />
                <h1 className="font-bold text-xl">{name}</h1>
            </div>
            <div className="space-y-3">
                <h2 className="font-bold text-lg">{task}</h2>
                <p className="leading-relaxed">{message}</p>
            </div>
            <p className="text-end text-sm text-neutral-500 dark:text-neutral-400">{time}</p>
        </motion.div>
    )
}