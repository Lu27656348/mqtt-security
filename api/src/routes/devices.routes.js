import { Router } from 'express';
import verify  from '../../middleware/verify.js';
import { authDevices,getAllDevices,createDevices,updateDevices,deleteDevices,findDevices } from "../controllers/Devices_controller.js"

const routerDevices = Router();

routerDevices.get('/auth/devices', getAllDevices);
routerDevices.post('/auth/devices/', createDevices);
routerDevices.put('/auth/devices/:id', updateDevices);
routerDevices.delete('/auth/devices/:id', deleteDevices);
routerDevices.get('/auth/devices/:id', findDevices);

export default routerDevices;