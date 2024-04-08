
import { Router } from "express";
import * as auth from '../controllers/auth';  //tudo que estiver nessa pasta como auth


const router = Router();

/** quando acessado ele retorna um true */
/** tudo que está dentro desse arquivo tem a rota /adim por padrão  */
router.get('/ping', (req,res) => res.json({pong:true}));
router.post('/login', auth.login);


export default router;