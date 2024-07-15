'use client'

import { motion } from 'framer-motion'
import { DesignerBlock } from "../components/designers/designer-block"
import { FilterByName } from "../components/designers/filters/filter-by-name"
import { FilterByEmail } from "../components/designers/filters/filter-by-email"

const Designers = ({ params: { lng } }: { params: { lng: string } }) => {
    return (
        <>
            <motion.section
                initial={{ x: -500 }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', }}
                className="flex justify-between lg:justify-start items-center gap-x-3 lg:gap-x-6"
            >
                <h1 className="font-semibold text-xl text-neutral-500 dark:text-neutral-400">Filter</h1>
                <FilterByName />
                <FilterByEmail />
            </motion.section>
            <section className="grid grid-cols-2 lg:grid-cols-5 gap-6">
                <DesignerBlock name='User' email='john@doe.com' />
                <DesignerBlock name='User' email='john@doe.com' />
                <DesignerBlock name='User' email='john@doe.com' />
                <DesignerBlock name='User' email='john@doe.com' />
                <DesignerBlock name='User' email='john@doe.com' />
            </section>
        </>
    )
}

export default Designers