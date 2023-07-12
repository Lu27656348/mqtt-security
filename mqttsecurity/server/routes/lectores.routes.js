import { Router } from "express";
const router = Router();
import {
    getLectores,
    getLector,
    createLector,
    updateLector,
    deleteLector
}from '../controllers/lectores.controller.js'

// Lectores
router.get('/lectores', getLectores)

router.get('/lectores/:id', getLector)

router.post('/lectores', createLector)

router.put('/lectores/:id', updateLector)

router.delete('/lectores/:id', deleteLector)

export default router;