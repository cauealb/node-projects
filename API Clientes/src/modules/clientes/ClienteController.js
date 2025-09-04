import express from 'express';
import * as ClienteService from "./ClienteService.js";

const router = express.Router();

router.get('/todos', async (req, res) => {
  try {
    console.log(req);
    const clientes = await ClienteService.getClientes();
    if (clientes == null) {
      res.status(200).json({
        message: "Nenhum dado encontrado!",
      });
      return;
    }

    res.json(clientes);
  } catch (ex) {
    res.status(500).json({
      message: "Erro ao listar clientes.",
      details: ex.message,
    });
  }
})

router.get('/pelo-id', async (req, res) => {
  try {
    const { idCliente } = req.body;

    const cliente = await ClienteService.getClientesPeloID(idCliente);
    if (cliente == null) {
      res.status(200).json({
        message: "Nenhum cliente encontrado com esse id.",
      });
      return;
    }

    res.json(cliente);
  } catch (ex) {
    res.status(500).json({
      message: "Erro ao listar cliente.",
      details: ex.message,
    });
  }
})

router.post('/criar', async (req, res) => {
  try {
    const dto = req.body;
    const resposta = await ClienteService.postCliente(dto);
    if (resposta == null) {
      res.status(400).json({
        message: "Ocorreu algum erro ao tentar criar um cliente.",
      });
      return;
    }

    res.status(201).json({
      message: "Cliente cadastrado com sucesso!",
    });
  } catch (ex) {
    res.status(500).json({
      message: "Erro ao criar cliente.",
      details: ex.message,
    });
  }
})

router.put('/alterar', async (req, res) => {
  try {
    const { dto, idCliente } = req.body;

    const resposta = await ClienteService.putCliente(dto, idCliente);
    if (resposta === null) {
      res.status(400).json({
        message: "Ocorreu algum erro ao tentar alterar esse cliente.",
      });
      return;
    }

    res.status(200).json({
      message: resposta,
    });
  } catch (ex) {
    res.status(500).json({
      message: "Erro ao alterar cliente.",
      details: ex.message,
    });
  }
})

router.delete('/deletar', async (req, res) => {
  try {
    const idCliente = req.body;

    const resposta = await ClienteService.deleteCliente(idCliente);
    if (resposta === null) {
      res.status(400).json({
        message: "Ocorreu um erro ao tentar alterar esse cliente.",
      });
      return;
    }

    res.status(200).json({
      message: "Cliente deletado com sucesso",
    });
  } catch (ex) {
    res.status(500).json({
      message: "Erro ao alterar cliente.",
      details: ex.message,
    });
  }
})

export default router;