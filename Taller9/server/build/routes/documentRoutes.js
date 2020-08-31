"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const documentController_1 = require("../controllers/documentController");
class DocumentRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', documentController_1.documentController.listTDocument);
    }
}
const documentRoutes = new DocumentRoutes();
exports.default = documentRoutes.router; /* Se exporta el enrutador */
