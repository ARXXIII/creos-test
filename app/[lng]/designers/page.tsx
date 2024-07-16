'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTranslation } from '@/app/i18n/client'

import { DesignerBlock } from "../components/designers/designer-block"
import { PrevButton } from '../components/designers/pagination/prev-button'
import { NextButton } from '../components/designers/pagination/next-button'
import { PageCounter } from '../components/designers/pagination/page-counter'
import { SortByName } from "../components/designers/filters/sort-by-name"
import { SortByEmail } from "../components/designers/filters/sort-by-email"

type Issues = {
    status: string
}

type Designers = {
    next: string
    previous: string
    username: string
    avatar: string
    email: string
    issues: Issues[]
}

const Designers = ({ params: { lng } }: { params: { lng: string } }) => {
    const { t } = useTranslation(lng, 'designers')

    const [next, setNext] = useState<string>()
    const [prev, setPrev] = useState<string>()
    const [byName, setByName] = useState<string>()
    const [byEmail, setByEmail] = useState<string>()
    const [currentUrl, setCurrentUrl] = useState<string>()
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [designers, setDesigners] = useState<Designers[]>()

    const fetchDesigners = async (url: string) => {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to fetch designers');
        }

        const data = await response.json();

        setDesigners(data.results);
        setNext(data.next);
        setPrev(data.previous);
    }

    const nextPage = async () => {
        setCurrentUrl(next)

        const response = await fetch(`${next}`);

        if (!response.ok) {
            throw new Error('Failed to fetch designers');
        }

        const data = await response.json();

        setDesigners(data.results);
        setNext(data.next);
        setPrev(data.previous);
        setCurrentPage(currentPage + 1)
    }

    const prevPage = async () => {
        setCurrentUrl(prev)

        const response = await fetch(`${prev}`);

        if (!response.ok) {
            throw new Error('Failed to fetch designers');
        }

        const data = await response.json();

        setDesigners(data.results);
        setNext(data.next);
        setPrev(data.previous);
        setCurrentPage(currentPage - 1)
    }

    const sortByName = async () => {
        const sort = byName === 'username' ? '-username' : 'username'

        const response = await fetch(`/api/designers/sortByName/${sort}`);

        if (!response.ok) {
            throw new Error('Failed to fetch designers');
        }

        const data = await response.json();

        setDesigners(data.results);
        setNext(data.next);
        setPrev(data.previous);
        setByName(sort)
    }

    const sortByEmail = async () => {
        const sort = byEmail === 'email' ? '-email' : 'email'

        const response = await fetch(`/api/designers/sortByEmail/${sort}`);

        if (!response.ok) {
            throw new Error('Failed to fetch designers');
        }

        const data = await response.json();

        setDesigners(data.results);
        setNext(data.next);
        setPrev(data.previous);
        setByEmail(sort)
    }

    useEffect(() => {
        fetchDesigners(currentUrl || '/api/designers')
    }, [currentUrl])

    return (
        <>
            <section className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6'>
                <motion.div
                    initial={{ x: -500 }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', }}
                    className="flex justify-between lg:justify-start items-center gap-x-3 lg:gap-x-6"
                >
                    <h1 className="font-semibold text-xl text-neutral-500 dark:text-neutral-400">{t('sort')}</h1>
                    <SortByName title={t('sortByName')} type={byName!} sort={sortByName} />
                    <SortByEmail title={t('sortByEmail')} type={byEmail!} sort={sortByEmail} />
                </motion.div>
                <motion.div
                    initial={{ x: 500 }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', }}
                    className="flex justify-between lg:justify-start items-center gap-x-3 lg:gap-x-6"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <PrevButton prev={prevPage} url={prev!} />
                    </motion.div>

                    <PageCounter page={currentPage} />

                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <NextButton next={nextPage} url={next!} />
                    </motion.div>
                </motion.div>
            </section>
            <section>

                {designers ? (
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

                        {designers.map((designer) => (
                            <DesignerBlock
                                key={designer.username}
                                lng={lng}
                                name={designer.username}
                                email={designer.email}
                                img={designer.avatar}
                                done={designer.issues.filter((issue: { status: string }) => issue.status === 'Done').length}
                                inProgress={designer.issues.filter((issue: { status: string }) => issue.status === 'In Progress').length}
                            />
                        ))}

                    </div>
                ) : (
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='flex justify-center items-center'
                    >
                        <h1 className='p-3 text-2xl bg-neutral-200 dark:bg-zinc-800 rounded-xl shadow-neumorphism-light dark:shadow-neumorphism-dark'>{t('empty')}</h1>
                    </motion.div>
                )}

            </section>
        </>
    )
}

export default Designers