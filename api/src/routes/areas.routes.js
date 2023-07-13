import { Router } from 'express';
import { getAllAreas, createArea, updateAreas, deleteAreas, findAreas } from '../controllers/Areas_controller.js';
import verify  from '../../middleware/verify.js';

const routerAreas = Router();

routerAreas.get('/auth/areas',verify, getAllAreas);
routerAreas.post('/auth/areas',verify, createArea);
routerAreas.put('/auth/areas/:id',verify, updateAreas);
routerAreas.delete('/auth/areas/:id',verify, deleteAreas);
routerAreas.get('/auth/areas/:id',verify, findAreas);

export default routerAreas;