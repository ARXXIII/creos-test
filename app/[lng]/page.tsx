'use client'

import { motion } from 'framer-motion'
import { Comment } from './components/comment'
import { useTranslation } from '../i18n/client'
import { TopItem } from './components/top-item'

const Page = ({ params: { lng } }: { params: { lng: string } }) => {
    const { t } = useTranslation(lng, 'home')

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
                        {t('title')}
                    </motion.h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    <Comment
                        name='Name'
                        img='https://sandbox.creos.me/media/images/avatars/marcusshah.jpg'
                        task='RR3-320'
                        message='GedSsGgsWOUpKqCPmZNG'
                        time='Час назад'
                    />
                    <Comment
                        name='Name'
                        img='https://sandbox.creos.me/media/images/avatars/marcusshah.jpg'
                        task='RR3-320'
                        message='GedSsGgsWOUpKqCPmZNG'
                        time='Час назад'
                    />
                    <Comment
                        name='Name'
                        img='https://sandbox.creos.me/media/images/avatars/marcusshah.jpg'
                        task='RR3-320'
                        message='GedSsGgsWOUpKqCPmZNG'
                        time='Час назад'
                    />
                    <Comment
                        name='Name'
                        img='https://sandbox.creos.me/media/images/avatars/marcusshah.jpg'
                        task='RR3-320'
                        message='GedSsGgsWOUpKqCPmZNG'
                        time='Час назад'
                    />
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
                        {t('top')}
                    </motion.h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    <TopItem name='marcusshah' position={1} />
                    <TopItem name='marcusshah' position={2} />
                    <TopItem name='marcusshah' position={3} />
                    <TopItem name='marcusshah' position={4} />
                    <TopItem name='marcusshah' position={5} />
                </div>
            </section>
        </>
    )
}

export default Page