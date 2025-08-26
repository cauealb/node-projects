import * as ClienteService from './ClienteService.js'



export async function getClientes(req, res) {
    try
    {
        const clientes = await ClienteService.getClientes()
        if(clientes == null){
            res.statusCode(400).json({message: "Nenhum dado encontrado!"});
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