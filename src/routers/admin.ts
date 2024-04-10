
import { Router } from "express";
import * as auth from '../controllers/auth';  //tudo que estiver nessa pasta como auth
import * as events from '../controllers/events';



const router = Router();

/** quando acessado ele retorna um true */
/** tudo que está dentro desse arquivo tem a rota /adim por padrão  */
router.get('/ping', auth.validate, (req,res) => res.json({pong:true}));

router.post('/login', auth.login);

router.get('/events', auth.validate, events.getAll);

router.get('/events/:id', auth.validate, events.getEvent);

router.post('/events', auth.validate, events.addEvent);

export default router;