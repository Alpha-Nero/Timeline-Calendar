const express = require('express');
const route = express.Router();
const Prod = require('../../models/Production')

route.get('/', async (req, res) => {
    try {
        const subAssembly = await Prod.find({});
        if (!subAssembly) {
            res.status(404).send('Error');
        }
        else {
            let groups = [];
            let items = [];
            if (subAssembly.length > 0) {
                subAssembly.map((i, index) => {
                    groups.push({ id: index, title: i.Job });
                    items.push({ id: index, title: i.name, group: index, start_time: i.sub_assembly, end_time: i.structure_inspection });
                })
            }
            res.status(201).json({ success: true, data: { groups, items } })
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error')
    }
});

module.exports = route;


/*
 else code snippet --


 else {
            let groups = [];
            let items = [];
            if (subAssembly.length > 0) {
                subAssembly.map((i, index) => {
                    groups.push({ id: index, title: i.Job });
                    items.push({ id: index, title: i.name, group: index, start_time: moment(i.sub_assembly, 'YYYY-MM-DDTHH:mm:ss'), end_time: moment(i.structure_inspection, 'YYYY-MM-DDTHH:mm:ss') });
                })
            }
            res.status(201).json({ success: true, data: { groups, items } })
        }

*/