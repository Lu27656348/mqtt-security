import { Router } from 'express';
import { getAllUsersTypes, createUserTypes, findUserTypes, deleteUserTypes } from '../controllers/User_types.controller.js';
import verify  from '../../middleware/verify.js';

const routerUserTypes = Router();

routerUserTypes.get('/auth/usertypes',verify, getAllUsersTypes);
routerUserTypes.post('/auth/usertypes/create',verify, createUserTypes);
routerUserTypes.get('/auth/usertypes/find',verify, findUserTypes);
routerUserTypes.delete('/auth/usertypes/delete',verify, deleteUserTypes);

export default routerUserTypes;