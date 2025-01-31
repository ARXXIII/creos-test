import { NextResponse } from 'next/server';

export const GET = async () => {
	const API_URL = process.env.API_URL;

	const response = await fetch(`${API_URL}/issue/`);

	const data = await response.json();

	return new NextResponse(JSON.stringify(data), { status: 200 });
};
