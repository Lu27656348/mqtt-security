import { Router } from 'express';
import verify  from '../../middleware/verify.js';
import { getAllCard,findCard,createCard,updateCard,deleteCard } from "../controllers/Card.controller.js"

const routerCard = Router();


routerCard.get('/auth/card', getAllCard);
routerCard.post('/auth/card/', createCard);
routerCard.put('/auth/card/:id', updateCard);
routerCard.delete('/auth/card/:id', deleteCard);
routerCard.get('/auth/card/:id', findCard);

export default routerCard;