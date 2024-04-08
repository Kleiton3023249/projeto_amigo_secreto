//ROTAS PÚBLICAS

import { Router } from "express";


const router = Router();

/** quando acessado ele retorna um true */
router.get('/ping', (req,res) => res.json({pong:true}));

export default router;
