"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.personController = void 0;
const database_1 = __importDefault(require("../database"));
class PersonController {
    person(req, res) {
        res.send('Persons');
        database_1.default.query('Describe persona');
        res.json('Persons');
    } /* Metodo que me retorna la ruta principal */
}
exports.personController = new PersonController();
