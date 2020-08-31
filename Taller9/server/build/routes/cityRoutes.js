"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cityController_1 = require("../controllers/cityController");
class CityRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', cityController_1.cityController.listCity);
    }
}
const citiesRoutes = new CityRoutes();
exports.default = citiesRoutes.router; /* Se exporta el enrutador */
