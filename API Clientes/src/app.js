import express from 'express';
import Cliente from './modules/clientes/ClienteController.js'

const app = express();
app.use(express.json());

app.use('/', Cliente)

export default app