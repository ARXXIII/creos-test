'use client'

import { ru } from 'date-fns/locale'
import { UserAvatar } from "./avatar"
import { motion } from 'framer-motion'
import { formatRelative, subDays } from 'date-fns'

interface CommentProps {
    lng: string
    name: string
    img?: string
    task: string
    message: string
    time: string
}

export const Comment = ({ lng, name, img, task, message, time }: CommentProps) => {
    const initial = name.split('').shift()

    const commentAgo = lng === 'ru' ? formatRelative(time, new Date(), { locale: ru }) : formatRelative(time, new Date())

    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-between gap-y-6 p-3 bg-neutral-200 dark:bg-zinc-800 rounded-xl shadow-neumorphism-light dark:shadow-neumorphism-dark"
        >
            <div className="space-y-6">
                <div className="flex items-center gap-x-3">
                    <UserAvatar initial={initial!} img={img} />
                    <h1 className="font-bold text-xl">{name}</h1>
                </div>
                <div className="space-y-3">
                    <h2 className="font-bold text-lg">{task}</h2>
                    <p className="leading-relaxed">{message}</p>
                </div>
            </div>
            <p className="text-end text-xs text-neutral-500 dark:text-neutral-400">{commentAgo}</p>
        </motion.div>
    )
}