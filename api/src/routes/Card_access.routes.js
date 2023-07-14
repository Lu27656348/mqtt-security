import { Router } from 'express';
import { getAllCardAccess, createCardAccess, updateCardAccess, deleteCardAccess, findCardAccess} from '../controllers/Card_access.controller.js';
import verify  from '../../middleware/verify.js';

const routerCardAccess = Router();

routerCardAccess.get('/auth/cardaccess',verify, getAllCardAccess);
routerCardAccess.post('/auth/cardaccess',verify, createCardAccess);
routerCardAccess.put('/auth/cardaccess/update',verify, updateCardAccess);
routerCardAccess.delete('/auth/cardaccess/delete',verify, deleteCardAccess);
routerCardAccess.get('/auth/cardaccess/find',verify, findCardAccess);

export default routerCardAccess;