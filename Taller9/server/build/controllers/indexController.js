"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({ text: 'API is /api/persons' });
    } /* Metodo que me retorna la ruta principal */
}
exports.indexController = new IndexController();
