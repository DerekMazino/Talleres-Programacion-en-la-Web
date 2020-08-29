"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class PersonRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Persons'));
    }
}
const personRoutes = new PersonRoutes();
exports.default = personRoutes.router; /* Se exporta el enrutador */
