import express from 'express';
import * as Cliente from './modules/clientes/ClienteController'

const app = express();
app.use(express.json());

app.use('/', Cliente)

export default app