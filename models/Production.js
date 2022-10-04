const mongoose = require('mongoose');

const stringType = {
    type: String,
    trim: true,
    default: null
}
const dateType = {
    type: Date,
    default: null
}
const booleanWithDefaultType = {
    type: Boolean,
    defalt: false
}

const prodSchema = mongoose.model('RetroPlan', new mongoose.Schema({
    Job: stringType,
    name: stringType,
    survey: dateType,
    drawing_start: dateType,
    first_revision: dateType,
    first_mr: dateType,
    procurement_first_mr: dateType,
    drawing_approvel: dateType,
    Second_mr: dateType,
    procurement_second_mr: dateType,
    sub_assembly: dateType,
    structure_inspection: dateType,
    paint: dateType,
    paint_inspection: dateType,
    final: dateType,
    first_final_inspection: dateType,
    second_final_inspection: dateType,
    packing: dateType,
    dispatch: dateType,
    delivery: dateType,
    hoarding: stringType,
    civil_mep_works: stringType,
    Install: dateType,
    handover: dateType,
    project_manager: stringType,
    first_kickoff: dateType,
    second_kickoff: dateType,
    is_delete: booleanWithDefaultType
}))

module.exports = prodSchema;