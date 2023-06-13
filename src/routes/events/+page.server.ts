import prisma from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		events: await prisma.events.findMany()
	};
}) satisfies PageServerLoad;
