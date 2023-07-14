import { Router } from 'express';
import { getAllRolesAccessPoints, createRolesAccessPoints, findRolesAccessPoints, deleteRolesAccessPoints } from '../controllers/Roles_access_point.controller.js';
import verify  from '../../middleware/verify.js';

const routerRolAccessPoint = Router();

routerRolAccessPoint.get('/auth/rolaccesspoint',verify, getAllRolesAccessPoints);
routerRolAccessPoint.post('/auth/rolaccesspoint',verify, createRolesAccessPoints);
routerRolAccessPoint.delete('/auth/rolaccesspoint/delete',verify, deleteRolesAccessPoints);
routerRolAccessPoint.get('/auth/rolaccesspoint/find',verify, findRolesAccessPoints);

export default routerRolAccessPoint;