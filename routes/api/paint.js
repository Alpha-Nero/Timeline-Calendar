const express = require('express');
const route = express.Router();
const Paint = require('../../models/Production')

route.get('/', async (req, res) => {
    try {
        const paint = await Paint.find({});
        if (!paint) {
            res.status(404).send('Error')
        }
        else {
            let groups = [];
            let items = [];
            if (paint.length > 0) {
                paint.map((i, index) => {
                    groups.push({ id: index, title: i.Job });
                    items.push({ id: index, title: i.name, group: index, start_time: i.paint, end_time: i.paint_inspection });
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