const mongoose = require('mongoose');

const DriverSchema = new mongoose.Schema({
        driverName: {
            type: String,
            required: true
        },
        driverId: {
            type: String,
            required: true
        },
        driverLicense: {
            type: String,
            required: true
        },
        licenceType: {
            type: String,
            enum: ['HMV', 'LMV'],
            required: true
        },
        driverContact: {
            type: Number,
            required: true
        },
        driverImage: {
            type: String,
            required: true
        },
        available: {
            type: Boolean,
            default: true
        },
        expiryDate: {
            type: Date,
            required: true
        }

    },
    {
        timestamps: true
    }
);

const Driver = mongoose.model('Driver', DriverSchema);

module.exports = Driver;