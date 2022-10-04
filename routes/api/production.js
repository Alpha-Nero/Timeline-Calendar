const express = require('express');
const route = express.Router();
const Prod = require('../../models/Production')
const moment = require('moment');

route.get('/', async (req, res) => {
    try {
        const prod = await Prod.find({})
        if (!prod) {
            res.status(404).send('Error');
        } else {
            let groups = [];
            let items = [];
            if (prod.length > 0) {
                prod.map((i, index) => {
                    groups.push({ id: index, title: i.Job })
                    items.push({ id: index, title: i.name, group: index, start_time: moment(i.sub_assembly, 'YYYY-MM-DDTHH:mm:ss'), end_time: moment(i.second_final_inspection, 'YYYY-MM-DDTHH:mm:ss') })
                })
            }
            return res.status(200).json({ success: true, data: { groups, items } })
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error')
    }
});

module.exports = route;

/*
route.get('/', async (req, res) => {
    try {
        const prod = await Prod.find({})
        if (!prod) {
            res.status(404).send('Error');
        } else {
            let groups = [];
            let items = [];
            if (prod.length > 0) {
                prod.map((i, index) => {
                    groups.push({ id: index, title: i.Job })
                    items.push({ id: index, title: i.name, group: index, start_time: i.sub_assembly, end_time: i.second_final_inspection })
                })
            }
            return res.status(200).json({ success: true, data: { groups, items } })
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error')
    }
});
*/