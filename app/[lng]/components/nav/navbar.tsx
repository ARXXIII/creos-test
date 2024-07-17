'use client'

import { useState } from 'react'
import { links } from '@/constants'
import { NavLink } from './nav-link'
import { motion } from 'framer-motion'
import { NavButton } from './nav-button'

interface NavbarProps {
    currentWorkWeek: number
    lng: string
}

export const Navbar = ({ currentWorkWeek, lng }: NavbarProps) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const menu = {
        open: {
            width: "320px",
            height: "315px",
            top: "-10px",
            right: "-10px",
            transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
        },
        closed: {
            width: "0",
            height: "0",
            top: "3px",
            right: "3px",
            transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
        }
    }

    const workWeek = {
        open: {
            scale: 1,
            transition: { delay: 0.6 }
        },
        closed: {
            scale: 0,
            transition: { delay: 0.4 }
        }
    }

    return (
        <div className='flex flex-col items-end relative'>
            <div className='absolute right-0 z-20'>
                <NavButton isActive={isActive} lng={lng} toggleMenu={() => setIsActive(!isActive)} />
            </div>
            <motion.nav
                variants={menu}
                initial="closed"
                animate={isActive ? "open" : "closed"}
                transition={{ type: 'spring', duration: 0.6 }}
                className="absolute bg-neutral-200 dark:bg-zinc-800 rounded-xl shadow-neumorphism-light dark:shadow-neumorphism-dark overflow-hidden z-10"
            >
                <motion.div
                    variants={workWeek}
                    initial="closed"
                    animate={isActive ? "open" : "closed"}
                    className='flex justify-center items-center md:hidden absolute top-3 left-3 w-12 h-12 font-semibold rounded-lg shadow-neumorphism-light dark:shadow-neumorphism-dark'
                >
                    {currentWorkWeek}
                </motion.div>
                <div className='absolute top-[25%] left-3 space-y-12'>

                    {links.map((link, index) => (
                        <NavLink
                            key={link.title}
                            index={index}
                            title={link.title}
                            href={link.href}
                            lng={lng}
                            isActive={isActive}
                            toggleMenu={() => setIsActive(!isActive)}
                        />
                    ))}

                </div>
            </motion.nav>
        </div>
    )
}