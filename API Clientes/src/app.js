import express from 'express';

const app = express();
app.use(express.json());

app.use('/clientes')

export default app