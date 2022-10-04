const express = require('express');
const route = express.Router();
const Final = require('../../models/Production')

route.get('/', async (req, res) => {
    try {
        const final = await Final.find({});
        if (!final) {
            res.status(404).send('Error')
        }
        else {
            let groups = [];
            let items = [];
            if (final.length > 0) {
                final.map((i, index) => {
                    groups.push({ id: index, title: i.Job });
                    items.push({ id: index, title: i.name, group: index, start_time: i.final, end_time: i.first_final_inspection });
                })
            }
            res.status(200).json({ success: true, data: { groups, items } })
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
});

module.exports = route;