"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personController_1 = require("../controllers/personController");
class PersonRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', personController_1.personController.person);
    }
}
const personRoutes = new PersonRoutes();
exports.default = personRoutes.router; /* Se exporta el enrutador */
