import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import https from 'https';
import http from 'http';
import siteRouter from './routers/site'
import admRouter from './routers/admin'
import requestIntercepter from './utils/requestIntercepter';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));  //padrão

/** Qualquer requisição, primeiro irá passar por esse interceptador que tem como finalidade
 * mostrar todo o status da requisição para nos auxiliar no processo de desenvolvimento.
 */
app.all('*', requestIntercepter);


/** Tudo que começa com a barra ele joga para rota siteRouter */
app.use('/admin', admRouter)
app.use('/', siteRouter);


/**  */
const runServer = (port: number, server: http.Server ) => {
    server.listen(port, () => {
        console.log(`Running at PORT ${port}`);
    })
}

/** Aqui, criamos um servidor HTTP usando o aplicativo Express que acabamos de configurar. */
const regularServer = http.createServer(app)


/** Para rodar em duas portas distintas */

if(process.env.NODE_ENV === 'production') {
    // TODO: configurar SSL
    // TODO: rodar server na 80 e na 443
} else {
    const serverPort: number = process.env.PORT ? parseInt(process.env.PORT) : 9000;
    runServer(serverPort, regularServer);
}