import express, {Application} from 'express'
import indexRoutes from './routes/indexRoutes';
import personRoutes from './routes/personRoutes';
import citiesRoutes from './routes/cityRoutes'
import documentRoutes from './routes/documentRoutes'
import morgan from 'morgan';
import cors from 'cors';
class Server {

    public app: Application; /* Se crea una variable de tipo application */
    constructor(){
        this.app=express(); /* Se asigna un valor, en este caso un objeto de tipo express */
        this.config();
        this.reoute();
    }
    config(): void {/* Metodo para configurar el server */
        this.app.set('port', process.env.PORT || 3000);/* Se asigna un puerto al server */
        this.app.use(morgan('dev'));/* Con esto veremos las peticiones hechas al server */
        this.app.use(cors());/* Con esto angular ya puede perdir datos al server */
        this.app.use(express.json());/* Permite aceptar formato json */
        this.app.use(express.urlencoded({extended: false}));
    }
    reoute (): void{/* Se definen las rutas del server */
        this.app.use(indexRoutes);
        this.app.use('/api/persons',personRoutes);
        this.app.use('/api/cities',citiesRoutes);
        this.app.use('/api/tdocuments',documentRoutes);
    }
    start() {/* Ejecuta el server */
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}

const server = new Server();/* Se corre la clase Server */
server.start();