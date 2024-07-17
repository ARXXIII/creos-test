'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTranslation } from '../i18n/client'

import { Comment } from './components/comment'
import { TopItem } from './components/top-item'

interface Comments {
    id: number
    issue: string
    designer: {
        username: string
        avatar: string
    }
    message: string
    date_created: string
}

interface Top {
    designer: string
}

const Page = ({ params: { lng } }: { params: { lng: string } }) => {
    const { t } = useTranslation(lng, 'home')

    const [top, setTop] = useState<Array<Top>>()
    const [comments, setComments] = useState<Array<Comments>>()

    const fetchComments = async () => {
        try {
            const response = await fetch('/api/comments');

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const data = await response.json();

            const lastComments = data.slice(0, 10)

            setComments(lastComments)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchTop = async () => {
        try {
            const response = await fetch('/api/top');

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const data = await response.json();

            const bestOfTheBest = data.slice(0, 10)

            setTop(bestOfTheBest)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchComments()
        fetchTop()
    }, [])

    return (
        <>
            <section className='space-y-6'>
                <div className='flex items-center gap-x-3'>
                    <motion.h1
                        initial={{ x: -500 }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', }}
                        className='font-bold text-2xl lg:text-4xl shrink-0'
                    >
                        {t('top')}
                    </motion.h1>
                </div>
                <div>

                    {top ? (
                        <div className='grid grid-cols-2 xl:grid-cols-5 gap-6'>

                            {top.map((designer, index) => (
                                <TopItem key={designer.designer} name={designer.designer} position={index + 1} />
                            ))}

                        </div>
                    ) : (
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className='flex justify-center items-center'
                        >
                            <h1 className='p-3 text-2xl bg-neutral-200 dark:bg-zinc-800 rounded-xl shadow-neumorphism-light dark:shadow-neumorphism-dark'>{t('noTop')}</h1>
                        </motion.div>
                    )}

                </div>
            </section>
            <section className='space-y-6'>
                <div className='flex items-center gap-x-3'>
                    <motion.h1
                        initial={{ x: -500 }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', }}
                        className='font-bold text-2xl lg:text-4xl shrink-0'
                    >
                        {t('title')}
                    </motion.h1>
                </div>
                <div className='space-y-6'>

                    {comments ? comments.map((comment) => (
                        <Comment
                            key={comment.id}
                            lng={lng}
                            name={comment.designer.username}
                            img={comment.designer.avatar}
                            task={comment.issue}
                            message={comment.message}
                            time={comment.date_created}
                        />
                    )) : (
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className='flex justify-center items-center'
                        >
                            <h1 className='p-3 text-2xl bg-neutral-200 dark:bg-zinc-800 rounded-xl shadow-neumorphism-light dark:shadow-neumorphism-dark'>{t('noComments')}</h1>
                        </motion.div>
                    )}

                </div>
            </section>
        </>
    )
}

export default Page