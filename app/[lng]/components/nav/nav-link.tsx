'use client'

import Link from 'next/link';

import { motion } from 'framer-motion';
import { useTranslation } from '@/app/i18n/client';

interface NavLinkProps {
    title: string
    href: string
    lng: string
    index: number
    isActive: boolean
    toggleMenu: () => void
}

export const NavLink = ({ title, href, lng, index, isActive, toggleMenu }: NavLinkProps) => {
    const { t } = useTranslation(lng, 'navbar')

    const perspective = {
        initial: {
            opacity: 0,
            rotateX: 90,
            translateX: -10,
            translateY: 80,
        },
        enter: (i: number) => ({
            opacity: 1,
            rotateX: 0,
            translateX: 0,
            translateY: 0,
            transition: {
                duration: 0.65,
                delay: 0.5 + (i * 0.1),
                ease: [.215, .61, .355, 1],
                opacity: { duration: 0.35 }
            }
        }),
        exit: {
            opacity: 0,
            transition: { duration: 0.65, type: "linear", ease: [0.76, 0, 0.24, 1] }
        }
    }

    return (
        <motion.div
            custom={index}
            variants={perspective}
            initial={perspective.initial}
            animate={isActive ? perspective.enter(index) : perspective.exit}
        >
            <Link
                href={href}
                onClick={toggleMenu}
                className='font-bold text-4xl'
            >
                {t(`${title}`)}
            </Link>
        </motion.div>
    )
}