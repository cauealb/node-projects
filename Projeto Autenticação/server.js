import express from 'express';
import publicRouter from './public/public.js'

const app = express();
app.use(express.json());

app.use('/usuario', publicRouter);

app.listen(1200, () => console.log("Server inicializado!!"));