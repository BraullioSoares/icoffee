const restful = require('node-restful')
const mongoose = restful.mongoose


const addressSchema = new mongoose.Schema({
    street: {type: String, required: true},
    number: {type: Number, min: 0, required: true},
    neighborhood: {type: String, required: true}
})

const orderSchema = new mongoose.Schema({
    item: {type: String, required: true},
    value: {type: Number, min: 0, required: true}
})

const clientSchema = new mongoose.Schema({
    name: {type: String, required: true},
    address: [addressSchema],
    order: [orderSchema]
})


module.exports = restful.model('Clients', clientSchema)