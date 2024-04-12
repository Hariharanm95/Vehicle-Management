const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
        vehicleName: {
            type: String,
            required: true
        },
        vehicleNumber: {
            type: Number,
            required: true
        },
        vehicleType: {
            type: String,
            enum: ['bus', 'car', 'tempo', 'goodstruck'],
            required: true
        },
        greenTax: {
            type: String,
            required: true
        },
        roadTax: {
            type: String,
            required: true
        },
        insurance: {
            type: String,
            required: true
        },
        pollution: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        capacity: {
            type: Number,
            required: true
        },
        available:{
            type: Boolean,
            default: true
        },
    },
    {
        timestamps: true
    }
);
const Vehicle = mongoose.model('Vehicle', VehicleSchema);
module.exports = Vehicle;

