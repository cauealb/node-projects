import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
    const user = req.body;

    res.status(201).json(user);
});