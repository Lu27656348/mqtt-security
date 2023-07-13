import { Router } from 'express';
import { getAllUsers,findUser,updateUser,createUser,deleteUser,insertPhoto } from '../controllers/User.controller.js';
import verify  from '../../middleware/verify.js';

const routerUser= Router();

routerUser.get('/auth/users',verify, getAllUsers);
routerUser.post('/auth/users',verify, createUser);
routerUser.put('/auth/users/:id',verify, updateUser);
routerUser.delete('/auth/users/:id',verify, deleteUser);
routerUser.get('/auth/users/:id',verify, findUser);
routerUser.get('/auth/users/photo/:id',verify, insertPhoto);

export default routerUser;