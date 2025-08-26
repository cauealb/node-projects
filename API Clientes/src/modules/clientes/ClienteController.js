import * as ClienteService from './ClienteService.js'



export async function getClientes(req, res) {
    try
    {
        const clientes = await ClienteService.getClientes()
        if(clientes == null){
            res.statusCode(200).json({
                message: "Nenhum dado encontrado!"
            });
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