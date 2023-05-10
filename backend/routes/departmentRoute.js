import express from 'express';

import{
    getAllDepartments,
    getDepartmentById,
    createDepartment,
    updateDepartment,
    deleteDepartment,
} from '../controllers/departmentController.js';

const departmentRouter = express.Router();

departmentRouter.get('/', getAllDepartments);
departmentRouter.get('/:id', getDepartmentById);

departmentRouter.post('/', createDepartment);
departmentRouter.put('/:id', updateDepartment);
departmentRouter.delete('/:id', deleteDepartment);

export default departmentRouter;