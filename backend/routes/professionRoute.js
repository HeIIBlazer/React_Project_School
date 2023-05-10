import express from "express";

import {
    getAllProfessions,
    getProfessionById,
    getProfessionByDepartmentId,
    createProfession,
    updateProfession,
    deleteProfession,
} from '../controllers/professionController.js';

const professionRouter = express.Router();

professionRouter.get('/', getAllProfessions);
professionRouter.get('/:id', getProfessionById);
professionRouter.get('/department/:departmentId', getProfessionByDepartmentId);

professionRouter.post('/', createProfession);
professionRouter.put('/:id', updateProfession);
professionRouter.delete('/:id', deleteProfession);

export default professionRouter;