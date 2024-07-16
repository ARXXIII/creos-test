'use client'

import { motion } from 'framer-motion'
import { UserAvatar } from '../avatar'
import { useTranslation } from '@/app/i18n/client'

interface DesignerBlockProps {
    lng: string
    name: string
    img?: string
    email: string
    done: number
    inProgress: number
}

export const DesignerBlock = ({ lng, name, img, email, done, inProgress }: DesignerBlockProps) => {
    const { t } = useTranslation(lng, 'designer')

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
            <div className='flex items-center gap-x-3'>
                <h2 className='font-bold'>Email:</h2>
                <a href={`mailto:${email}`}>{email}</a>
            </div>
            <div className='space-y-3'>
                <h3 className='text-center font-bold text-lg'>{t('issues')}</h3>
                <div className='flex justify-between items-center gap-x-3'>
                    <div className='flex items-center gap-x-3'>
                        <h4 className='font-semibold'>{t('done')}:</h4>
                        <p className='px-2 py-1 bg-neutral-200 dark:bg-zinc-800 rounded-lg shadow-neumorphism-light dark:shadow-neumorphism-dark'>{done}</p>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <h4 className='font-semibold'>{t('inProgress')}:</h4>
                        <p className='px-2 py-1 bg-neutral-200 dark:bg-zinc-800 rounded-lg shadow-neumorphism-light dark:shadow-neumorphism-dark'>{inProgress}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}