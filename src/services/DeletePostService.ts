import prismaClient from '../prisma';

interface PostRequest {
	id: string;
}

class DeletePostService {
	async execute({ id }: PostRequest) {
		const post = await prismaClient.post.delete({ where: { id } });
		return post;
	}
}

export { DeletePostService };
