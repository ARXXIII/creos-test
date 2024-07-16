import { NextResponse } from 'next/server';

export const GET = async () => {
	const API_URL = process.env.API_URL;

	const response = await fetch(`${API_URL}/comment/?ordering=-date_created`);

	const data = JSON.stringify(await response.json());

	return new NextResponse(data, { status: 200 });
};
