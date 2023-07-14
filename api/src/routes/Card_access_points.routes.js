import { Router } from 'express';
import { getAllCardAccessPoints, findCardAccessPoints, deleteCardAccessPoints, createCardAccessPoints } from '../controllers/Card_access_point.controller.js';
import verify  from '../../middleware/verify.js';

const routerCardAccessPoints = Router();

routerCardAccessPoints.get('/auth/cardaccesspoint',verify, getAllCardAccessPoints);
routerCardAccessPoints.post('/auth/cardaccesspoint',verify, createCardAccessPoints);
routerCardAccessPoints.delete('/auth/cardaccesspoint/delete',verify, deleteCardAccessPoints);
routerCardAccessPoints.get('/auth/cardaccesspoint/find',verify, findCardAccessPoints);

export default routerCardAccessPoints;