import { Router } from 'express';
import verify  from '../../middleware/verify.js';
import { authDevices,getAllDevices } from "../controllers/Devices_controller.js"

const routerDevices = Router();

routerDevices.post('/authenticate', authDevices);

export default routerDevices;