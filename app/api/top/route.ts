import { NextResponse } from 'next/server';

export const GET = async () => {
	const API_URL = process.env.API_URL;

	try {
		const response = await fetch(`${API_URL}/issue/`);
		const data = await response.json();

		// Функция для расчета медианы
		const calculateMedian = (times: number[]) => {
			times.sort((a, b) => a - b);
			const mid = Math.floor(times.length / 2);
			return times.length % 2 !== 0
				? times[mid]
				: (times[mid - 1] + times[mid]) / 2;
		};

		const designerTasks: { [key: string]: { times: number[]; count: number } } =
			{};

		data.forEach((task: any) => {
			if (task.status === 'Done' && task.designer) {
				const timeSpent =
					(new Date(task.date_finished_by_designer).getTime() -
						new Date(task.date_started_by_designer).getTime()) /
					1000;
				if (!designerTasks[task.designer]) {
					designerTasks[task.designer] = { times: [], count: 0 };
				}
				designerTasks[task.designer].times.push(timeSpent);
				designerTasks[task.designer].count += 1;
			}
		});

		const designers = Object.keys(designerTasks).map((designer) => ({
			designer,
			medianTime: calculateMedian(designerTasks[designer].times),
			taskCount: designerTasks[designer].count,
		}));

		designers.sort(
			(a, b) => a.medianTime - b.medianTime || b.taskCount - a.taskCount
		);

		return new NextResponse(JSON.stringify(designers.slice(0, 10)), {
			status: 200,
		});
	} catch (error) {
		console.error('Error fetching data:', error);
		return new NextResponse(JSON.stringify({ error: 'Failed to fetch data' }), {
			status: 500,
		});
	}
};
