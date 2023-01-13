import prismaClient from '../prisma';

class ListPostService {
	async execute() {
		const posts = await prismaClient.post.findMany({
			orderBy: {
				created_at: 'desc',
			},
		});

		return posts;
	}
}

export { ListPostService };
