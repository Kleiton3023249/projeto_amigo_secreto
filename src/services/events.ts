import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();


export const getAll = async () => { 

    try {
        /** retorna todos os eventos 'findMany' */
        return await prisma.event.findMany();

    }
    catch(err) {
        return false
    }
}

export const getOne = async (id: number) => {
    try {
        return await prisma.event.findFirst({where: {id:id}});
    } catch (err) { return false }
}


/** Poderia ser feito assim: */
// type EventsCreateData = { 
//     title: string;
//     description: string;
//     grouped?: boolean;
// }


//dessa forma ele acessa o formato já definido no prisma:
/** type usado para criar novos tipos de dados e personalizar como quiser */
type EventsCreateData = Prisma.Args<typeof prisma.event, 'create'>['data'];
export const add = async (data: EventsCreateData) => {
    try {
        
        return await prisma.event.create({ data });

    }
    catch(err) {return false }
}   