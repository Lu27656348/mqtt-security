import { Router } from 'express';
import { getAllAreasTree,createAreaTree,deleteAreaTree, findAreaTree} from '../controllers/Areas_tree.controller.js';
import verify  from '../../middleware/verify.js';

const routerTree = Router();

routerTree.get('/auth/areatree',verify, getAllAreasTree);
routerTree.post('/auth/areatree/create',verify, createAreaTree);
routerTree.get('/auth/areatree/find',verify, findAreaTree);
routerTree.delete('/auth/areatree/delete',verify, deleteAreaTree);

export default routerTree;