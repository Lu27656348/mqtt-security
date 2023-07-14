import { Router } from 'express';
import { authClient } from '../controllers/Client_controller.js';

const routerClient = Router();

routerClient.post('/authenticate', authClient);

export default routerClient;