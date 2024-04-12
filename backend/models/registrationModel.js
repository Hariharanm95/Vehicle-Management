const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
        place: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        }, 
        peopleCount: {
            type: String,
            required: true
        },
        driverName: {
            type: String,
            required: true
        },
        driverId: {
            type: String,
            required: true
        },
        vehicleNumber: {
            type: String,
            required: true
        },
        vehicleType: {
            type: String,
            enum: ['bus', 'car', 'tempo', 'goodstruck'],
            required: true
        },
        purpose: {
            type: String,
            required: true
        },
        approved: {
            type: Boolean,
            default: false
        },
        userId: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);
const Registration = mongoose.model('Registration', RegistrationSchema);
module.exports = Registration;

