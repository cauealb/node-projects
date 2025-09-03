import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient();

export async function listarClientes() {
    try 
    {
        return await prisma.user.findMany();
    } catch (ex) 
    {
        console.log("Erro ao listar clientes.")
        throw ex;
    }
}

export async function criarCliente(dto) {
    try 
    {
        return await prisma.user.create({
            data: {name: "Caue", email: "cauealvesb4@gmail.com", password: "123@123"}
        });
    } catch (ex) 
    {
        console.log("Erro ao criar cliente.")
        throw ex;
    }
}