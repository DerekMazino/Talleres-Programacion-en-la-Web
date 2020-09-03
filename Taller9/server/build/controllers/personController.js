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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.personController = void 0;
const database_1 = __importDefault(require("../database"));
class PersonController {
    listPerson(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('select id_persona, nombres, apellidos, nombre_doc as fk_tipodocumento, documento, nombre_ciu as lugaresidencia, email, telefono, usuario, contrasena from persona join tipodocumento on fk_tipodocumento=id_tipdoc join ciudad on lugaresidencia=id_ciudad', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('SELECT * FROM persona WHERE id_persona = ?', [id], (error, result) => {
                if (error)
                    throw error;
                res.json(result);
                /* res.status(404).json({text: "The person doesn't exists"}); */
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /* const result = await pool.query('INSERT INTO persona set ?', [req.body]); */
            yield database_1.default.query('INSERT INTO persona SET ?', req.body, (error, result) => {
                if (error)
                    throw error;
                res.json({ message: 'Persona Saved' });
            });
            /* console.log(result); */
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('Delete From persona WHERE id_persona = ?', [id], (error, result) => {
                if (error)
                    throw error;
                res.json('Person deleted.');
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE persona SET ? WHERE id_persona = ?', [req.body, id], (error, result) => {
                if (error)
                    throw error;
                res.json('Person updated successfully.');
            });
        });
    }
}
exports.personController = new PersonController();
