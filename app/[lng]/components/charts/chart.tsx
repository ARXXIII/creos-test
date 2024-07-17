'use client'

import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useTranslation } from '@/app/i18n/client';
import { parseISO, addWeeks, startOfWeek, getWeek, setHours, addHours } from 'date-fns';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type Task = {
    status: string;
    received_from_client: number;
    send_to_project_manager: number;
    send_to_account_manager: number;
    send_to_designer: number;
    date_finished: string | null;
};

type WeekData = {
    income: number;
    expenses: number;
};

interface ChartProps {
    tasks: Task[];
    lng: string
};

export const Chart = ({ tasks, lng }: ChartProps) => {
    const { t } = useTranslation(lng, 'tasks')

    const [weeksToShow, setWeeksToShow] = useState(8);

    const processTasks = (tasks: Task[]) => {
        const now = new Date();
        const startDate = addWeeks(startOfWeek(now), -weeksToShow + 1);

        const weeksData: Record<number, WeekData> = {};

        tasks.forEach(task => {
            if (task.status !== 'Done' || !task.date_finished) return;

            const finishedDate = addHours(parseISO(task.date_finished), -11);
            if (finishedDate < startDate) return;

            const weekNumber = getWeek(finishedDate);

            if (!weeksData[weekNumber]) {
                weeksData[weekNumber] = { income: 0, expenses: 0 };
            }

            const income = task.received_from_client;
            const expenses = task.send_to_project_manager + task.send_to_account_manager + task.send_to_designer;

            weeksData[weekNumber].income += income;
            weeksData[weekNumber].expenses += expenses;
        });

        return Object.keys(weeksData).map(week => ({
            week,
            ...weeksData[Number(week)]
        }));
    };

    const chartData = processTasks(tasks);

    const data = {
        labels: chartData.map(d => `${d.week} ${t('week')} `),
        datasets: [
            {
                label: t('income'),
                data: chartData.map(d => d.income),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: false,
            },
            {
                label: t('expenses'),
                data: chartData.map(d => d.expenses),
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: false,
            },
            {
                label: t('profit'),
                data: chartData.map(d => d.income - d.expenses),
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: false,
            }
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: t('completedTasks'),
            },
        },
    };

    return (
        <div className='space-y-6 p-3 rounded-xl shadow-neumorphism-light dark:shadow-neumorphism-dark'>
            <div className='text-center lg:text-start'>
                <label htmlFor="weeksToShow" className='font-semibold text-lg lg:text-xl text-neutral-500 dark:text-neutral-400 shrink-0'>
                    {t('show')}<input
                        type="number"
                        id="weeksToShow"
                        value={weeksToShow}
                        onChange={(e) => setWeeksToShow(Number(e.target.value))}
                        min="1"
                        className='mx-3 p-3 w-24 text-black dark:text-white bg-neutral-200 dark:bg-zinc-800 rounded-lg shadow-neumorphism-light dark:shadow-neumorphism-dark outline-none'
                    />
                    {t('weeks')}
                </label>

            </div>
            <Line data={data} options={options} />
        </div >
    );
}