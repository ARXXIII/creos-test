'use client'

import 'chart.js/auto';

import { Pie } from "react-chartjs-2";
import { useTranslation } from '@/app/i18n/client';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type Tasks = {
    status: string;
};

interface PieChartProps {
    tasks: Tasks[];
    lng: string
};

export const PieChart = ({ tasks, lng }: PieChartProps) => {
    const { t } = useTranslation(lng, 'tasks')

    const statusCount = tasks.reduce((acc, task) => {

        if (!acc[task.status]) {
            acc[task.status] = 0;
        }

        acc[task.status]++;

        return acc;
    }, {} as Record<string, number>);

    const statusData = {
        labels: Object.keys(statusCount),
        datasets: [
            {
                label: 'Status Distribution',
                data: Object.values(statusCount),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
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
                text: t('distributionOfTasks'),
            },
        },
    };

    return (
        <div className='flex justify-center p-3 w-full  rounded-xl shadow-neumorphism-light dark:shadow-neumorphism-dark'>
            <div className='max-h-96 lg:max-h-[500px]'>
                <Pie data={statusData} options={options} className='h-96' />
            </div>
        </div>
    )
}