import { Request, Response } from 'express';
import { DeletePostService } from '../services/DeletePostService';

class DeletePostController {
	async handle(req: Request, res: Response) {
		const deletePostService = new DeletePostService();

		const id = req.query.id as string;

		await deletePostService.execute({ id });

		return res.json({ message: 'Post deleted successfully' });
	}
}

export { DeletePostController };
