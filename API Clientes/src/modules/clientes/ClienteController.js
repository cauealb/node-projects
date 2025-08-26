import * as ClienteService from './ClienteService.js'



export async function getClientes(req, res) {
    try
    {
        const clientes = await ClienteService.getClientes()
        if(clientes == null){
            res.statusCode(200).json({
                message: "Nenhum dado encontrado!"
            });
            return;
        }

        res.json(clientes);
    }
    catch(ex) {
        res.statusCode(500).json({
            message: "Erro ao listar clientes.",
            details: ex
        })
    }
}

export async function getClientesPeloID(idCliente) {
    try
    {
        const cliente = await ClienteService.getClientesPeloID(idCliente);
        if(cliente == null) {
            res.statusCode(200).json({
                message: "Nenhum cliente encontrado com esse id."
            })
            return;
        }

        res.json(cliente);
    }
    catch(ex) 
    {
        res.statusCode(500).json({
            message: "Erro ao listar cliente.",
            details: ex
        })
    }
}

export async function postCliente(dto) {
    try
    {
        const resposta = await ClienteService.postCliente(dto);
        if(resposta == null) {
            res.statusCode(400).json({
                message: "Ocorreu algum erro ao tentar criar um cliente."
            })
            return;
        }
        res.statusCode(201).json({
            message: resposta
        })
    }
    catch (ex) 
    {
        res.statusCode(500).json({
            message: "Erro ao criar cliente.",
            details: ex
        })
    }
}

export async function putCliente(dto, idCliente) {
    try
    {
        const resposta = await ClienteService.putCliente(dto, idCliente);
        if(resposta === null) {
            res.statusCode(400).json({
                message: "Ocorreu algum erro ao tentar alterar esse cliente."
            });
            return;
        }

        res.statsCode(200).json({
            message: resposta
        })
    }
    catch(ex) 
    {
        res.statusCode(500).json({
            message: "Erro ao alterar cliente.",
            details: ex
        })
    }
}