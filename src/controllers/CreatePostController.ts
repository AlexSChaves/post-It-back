import { Request, Response } from 'express';
import { CreatePostService } from '../services/CreatePostService';

class CreatePostController {
	async handle(req: Request, res: Response) {
		const createPostService = new CreatePostService();

		const { content } = req.body;

		await createPostService.execute({ content });

		return res.json({ message: 'Post created successfully' });
	}
}

export { CreatePostController };
