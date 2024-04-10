import { RequestHandler } from "express";
import { z } from "zod";
import * as auth from '../services/auth'

export const login: RequestHandler = (req, res) => {
    //Validação do dados, será feita com ZOD

    /** Um esquema é uma estrutura definida para validar a senha, nesse caso:*/
    const loginSchema = z.object({
        password: z.string()
    });

    const body = loginSchema.safeParse(req.body); //safeParse função do zod usado para validar dados e retornar objeto.

    /** se a requisição não for feita com sucesso */
    if (!body.success) return res.json({ error: 'Dados Inválidos' });


    //validar a senha e gerar o token
    if (auth.validatePassword(body.data.password)) {
        return res.json({
            token: auth.createToken()
        });
    }

    res.status(403).json({ error: 'Acesso negado' });
}




export const validate: RequestHandler = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ error: 'Acesso negado' })
    }

    const token = req.headers.authorization.split(' ')[1];
    if (!auth.validateToken(token)) {
        return res.status(403).json({ error: 'Acesso negado' })
    }

    next();
}
