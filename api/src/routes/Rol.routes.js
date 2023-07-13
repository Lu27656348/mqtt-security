import { Router } from 'express';
import { getAllRoles, findRol, createRol, updateRol,deleteRol } from '../controllers/Rol_controller.js';
import verify  from '../../middleware/verify.js';

const routerRol = Router();

routerRol.get('/auth/rol',verify, getAllRoles);
routerRol.post('/auth/rol',verify, createRol);
routerRol.put('/auth/rol/:id',verify, updateRol);
routerRol.delete('/auth/rol/:id',verify, deleteRol);
routerRol.get('/auth/rol/:id',verify, findRol);

export default routerRol;