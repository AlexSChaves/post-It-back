"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreatePostController_1 = require("./controllers/CreatePostController");
const DeletePostController_1 = require("./controllers/DeletePostController");
const ListPostController_1 = require("./controllers/ListPostController");
const router = (0, express_1.Router)();
exports.router = router;
router.post('/post/create', new CreatePostController_1.CreatePostController().handle);
router.get('/posts', new ListPostController_1.ListPostController().handle);
router.delete('/post', new DeletePostController_1.DeletePostController().handle);
//# sourceMappingURL=routes.js.map