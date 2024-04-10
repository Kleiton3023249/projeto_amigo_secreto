/** Uma função que pega todos os eventos */

import { RequestHandler } from "express";
import * as events from '../services/events';
import { error } from "console";
import { z } from "zod";

export const getAll: RequestHandler = async (req, res) => {
    const items = await events.getAll();
    if(items) return res.json({ events: items});

    res.json({error: 'Ocorreu um erro'})
}

export const getEvent: RequestHandler = async (req, res) => {

    //pegando parâmetro id do url
    const {id} = req.params;
    const eventItem = await events.getOne(parseInt(id));
    if(eventItem) return res.json({event: eventItem});

    res.json({error: 'Ocorreu um erro'});
}

export const addEvent: RequestHandler = async (req, res) => {

    const addEventSchema = z.object({
        title : z.string(),
        description : z.string(),
        grouped: z.boolean()
    });

    //safeParse pega o body para ver se bate com o padrão definido a cima.
    const body = addEventSchema.safeParse(req.body);
    if(!body.success) return res.json({error: 'Dados Inválidos'});

    const newEvent = await events.add(body.data);
    if(newEvent) return res.status(201).json({ event: newEvent});

    res.json({error: 'Ocorreu um erro'});

}