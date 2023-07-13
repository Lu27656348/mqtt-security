import { Router } from 'express';
import { getAllCardAccess, createCardAccess, updateCardAccess, deleteCardAccess, findCardAccess} from '../controllers/Card_access.controller.js';
import verify  from '../../middleware/verify.js';

const routerCardAccess = Router();

routerAreas.get('/auth/cardaccess',verify, getAllCardAccess);
routerAreas.post('/auth/cardaccess',verify, createCardAccess);
routerAreas.put('/auth/cardaccess/update',verify, updateCardAccess);
routerAreas.delete('/auth/cardaccess/delete',verify, deleteCardAccess);
routerAreas.get('/auth/cardaccess/find',verify, findCardAccess);

export default routerAreas;