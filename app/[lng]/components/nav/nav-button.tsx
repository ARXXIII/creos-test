'use client'

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslation } from '@/app/i18n/client';

interface NavButtonProps {
    isActive: boolean
    lng: string
    toggleMenu: () => void
}

export const NavButton = ({ isActive, lng, toggleMenu }: NavButtonProps) => {
    const { t } = useTranslation(lng, 'navbar')

    const button = {
        open: {
            scale: 1
        },
        closed: {
            scale: 0
        }
    }

    return (
        <button type='button' className="p-3 font-bold text-xl lg:text-2xl bg-neutral-200 dark:bg-zinc-800 rounded-lg shadow-neumorphism-light dark:shadow-neumorphism-dark">
            <div onClick={() => toggleMenu()} >
                {isActive ? <X /> : <Menu />}
            </div>
        </button>
    )
}