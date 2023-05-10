import Department from '../models/department.js';

export const getAllDepartments = async (reg, res) => {
    try {
        const departments = await Department.findAll();
        res.json({ message: error.message });
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const getDepartmentById = async (reg, res) => {
    try {
        const department = await Department.findAll({
            where: { id: req.params.id },
        });
        res.json(department[0]);
    } catch (error) {
        res.json({ message: error.message });
    }

};

export const createDepartment = async (req, res) => {
    try {
        await Department.create(req.body);
        res.json({
            message: 'Department Created'
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};
export const updateDepartment = (req, res) => {
    try {
        await Department.update(req.body, {
            where: {
                id: params.id,
            },
        });
        res.json({
            message
        });
    }
};