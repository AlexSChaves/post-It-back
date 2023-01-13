import { Router } from 'express';
import { CreatePostController } from './controllers/CreatePostController';
import { DeletePostController } from './controllers/DeletePostController';
import { ListPostController } from './controllers/ListPostController';

const router = Router();

router.post('/post/create', new CreatePostController().handle);
router.get('/posts', new ListPostController().handle);
router.delete('/post', new DeletePostController().handle);

export { router };
