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