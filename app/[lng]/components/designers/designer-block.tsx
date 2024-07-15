'use client'

import { motion } from 'framer-motion'
import { UserAvatar } from '../avatar'

interface DesignerBlockProps {
    name: string
    img?: string
    email: string
}

export const DesignerBlock = ({ name, img, email }: DesignerBlockProps) => {
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
            <div className='flex flex-col lg:flex-row lg:items-center gap-3'>
                <h2 className='font-bold'>Email:</h2>
                <a href={`mailto:${email}`}>{email}</a>
            </div>
            <div className='space-y-3'>
                <h3 className='font-bold text-lg'>Задачи:</h3>
                <div className='flex items-center gap-x-3'>
                    <h4 className='font-bold'>Закрытые:</h4>
                    <p>5</p>
                </div>
                <div className='flex items-center gap-x-3'>
                    <h4 className='font-bold'>В процессе:</h4>
                    <p>5</p>
                </div>
            </div>
        </motion.div>
    )
}