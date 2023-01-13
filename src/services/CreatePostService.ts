import prismaClient from '../prisma';

interface PostRequest {
	content: string;
}

class CreatePostService {
	async execute({ content }: PostRequest) {
		const post = await prismaClient.post.create({
			data: {
				content,
			},
		});

		return post;
	}
}

export { CreatePostService };
