import Profession from '../models/profession.js';

export const getAllProfessions = async (req, res) => {
    try {
        const professions = await Profession.findAll({
            include:'department',
            where:{},
            order:[['name', 'ASC']]
        });
        res.json(professions);
    } catch (error) {
        res.json({ message: error.message });
    }
}


export const getProfessionById = async (req, res) => {
    try {
        const profession = await Profession.findAll({
            include:'department',
            where: {
                id: req.params.id
            },
        });
        res.json(profession[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getProfessionByDepartmentId = async (req, res) => {
    try {
        const professions = await Profession.findAll({
            include:'department',
            where: {
                department_id: req.params.id,
            },
            order:[['name', 'ASC']]
        });
        res.json(professions);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const createProfession = async (req, res) => {
    try {
        await Profession.create(req.body);
        res.json({
            message: 'Profession Created'
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateProfession = async (req, res) => {
    try {
        await Profession.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.json({
            message: 'Profession Updated',
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteProfession = async (req, res) => {
    try {
        await Profession.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.json({
            message: 'Profession Deleted',
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}