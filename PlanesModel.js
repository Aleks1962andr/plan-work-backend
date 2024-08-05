const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({

    object: String,
    name_object: String,
    length_route: {
        type: Number,
        required: true
    },
    diametr_route: {
        type: Number,
        required: true,
        min: [57, 'Диаметр трассы не может быть меньше 57'],
        max: [1220, 'Диаметр трассы не может быть больше 1220']
    },
    amount_work: {
        type: String,
        required: true
    },
    percentage: {
        type: Number,
        required: true,
        min: [0, 'Процент выполнения не может быть меньше 0'],
        max: [100, 'Процент выполнения не может быть больше 100']
    },
    start_work: String,
    finish_work: String,
    executor: String
    })

module.exports= mongoose.model('PlanWork', planSchema);