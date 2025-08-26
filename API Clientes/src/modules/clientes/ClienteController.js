



export async function getClientes(req, res) {
    try
    {


    }
    catch(ex) {
        res.statusCode(500).json({
            message: "Erro ao listar clientes.",
            details: ex
        })
    }
}