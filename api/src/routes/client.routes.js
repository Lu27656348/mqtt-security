import { Router } from 'express';
import verify  from '../../middleware/verify.js';
import { getAllClients, getClientById,authClient} from "../controllers/client_controller.js"

const routerClient = Router();

routerClient.get('/auth/users',verify, getAllClients);
routerClient.post('/auth/users/authenticate', authClient);
routerClient.get('/auth/users/:client_id', getClientById);


export default routerClient;