import * as _clienteRepository from './ClienteRepository.js'

export async function getClientes() {
    try
    {
        return _clienteRepository.listarClientes();
    }
    catch (ex) 
    {
        return ex
    }
}

export async function getClientesPeloID(idCliente) {
    return
}

export async function postCliente(dto) {
    try
    {
        return _clienteRepository.criarCliente(dto);
    }
    catch (ex) 
    {
        return ex
    }
}

export async function putCliente(dto, idCliente) {
    return
}

export async function deleteCliente(idCliente) {
    try 
    {
        return _clienteRepository.deletarCliente(idCliente)
    } catch (ex) 
    {
        return ex
    }
}