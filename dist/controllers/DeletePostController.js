"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePostController = void 0;
const DeletePostService_1 = require("../services/DeletePostService");
class DeletePostController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletePostService = new DeletePostService_1.DeletePostService();
            const id = req.query.id;
            yield deletePostService.execute({ id });
            return res.json({ message: 'Post deleted successfully' });
        });
    }
}
exports.DeletePostController = DeletePostController;
//# sourceMappingURL=DeletePostController.js.map