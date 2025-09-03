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
        console.log(dto)
        return await prisma.user.create({
            data: {name: dto.name, email: dto.email, password: dto.password}
        });
    } catch (ex) 
    {
        console.log("Erro ao criar cliente.")
        throw ex;
    }
}