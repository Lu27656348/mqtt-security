import { Router } from 'express';
import { getAllUsersCards, createUserCards, findUserCards, deleteUserCards } from '../controllers/User_cards.controller.js';
import verify  from '../../middleware/verify.js';

const routerUserCards= Router();

routerUserCards.get('/auth/userscards',verify, getAllUsersCards);
routerUserCards.post('/auth/userscards/create',verify, createUserCards);
routerUserCards.get('/auth/userscards/find',verify, findUserCards);
routerUserCards.delete('/auth/userscards/delete',verify, deleteUserCards);

export default routerUserCards;