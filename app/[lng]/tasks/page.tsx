'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from "react"
import { Chart } from "../components/charts/chart"
import { PieChart } from "../components/charts/pie-chart"

const TasksPage = ({ params: { lng } }: { params: { lng: string } }) => {
    const [tasks, setTasks] = useState()

    const fetchTasks = async () => {
        const response = await fetch('/api/tasks')

        if (!response.ok) {
            throw new Error('Failed to fetch tasks');
        }

        const data = await response.json();

        setTasks(data);
    }

    useEffect(() => {
        fetchTasks()
    }, [])

    return (
        <>
            {tasks ? (
                <motion.section
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                >
                    <Chart tasks={tasks} lng={lng} />
                    <PieChart tasks={tasks} lng={lng} />
                </motion.section>
            ) : (
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center"
                >
                    <h1 className="p-3 font-bold text-neutral-500 dark:text-neutral-400 text-3xl rounded-xl shadow-neumorphism-light dark:shadow-neumorphism-dark">No tasks</h1>
                </motion.div>
            )}
        </>
    )
}

export default TasksPage