"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const personRoutes_1 = __importDefault(require("./routes/personRoutes"));
const cityRoutes_1 = __importDefault(require("./routes/cityRoutes"));
const documentRoutes_1 = __importDefault(require("./routes/documentRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = express_1.default(); /* Se asigna un valor, en este caso un objeto de tipo express */
        this.config();
        this.reoute();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000); /* Se asigna un puerto al server */
        this.app.use(morgan_1.default('dev')); /* Con esto veremos las peticiones hechas al server */
        this.app.use(cors_1.default()); /* Con esto angular ya puede perdir datos al server */
        this.app.use(express_1.default.json()); /* Permite aceptar formato json */
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    reoute() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/persons', personRoutes_1.default);
        this.app.use('/api/cities', cityRoutes_1.default);
        this.app.use('/api/tdocuments', documentRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server(); /* Se corre la clase Server */
server.start();
