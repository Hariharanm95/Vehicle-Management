const Driver = require('../models/driverModel');
const asyncHandler = require('express-async-handler');

const getDrivers = asyncHandler(async(req,res)=>{
    try{
        const drivers = await Driver.find({});
        res.status(200).json(drivers)
    }catch(error){
        res.status(500)
        throw new Error(error.message)
    }
})

const getDriver = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params;
        const driver = await Driver.findById(id);
        res.status(200).json(driver)
    }catch(error){
        res.status(500)
        throw new Error(error.message)
    }
})

const createDriver = asyncHandler(async(req,res)=>{
    try{
        const driver = await Driver.create(req.body);
        res.status(200).json(driver)
    }catch(error){
        res.status(500)
        throw new Error(error.message)
    }
})

const updateDriver = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params;
        const driver = await Driver.findByIdAndUpdate(id);
        if(!driver) res.status(400).json({message: "Driver not found"})
        const updatedDriver = await Driver.findById(id);
        res.status(200).json(updatedDriver)
    }catch(error){
        res.status(500)
        throw new Error(error.message)
    }
})

const deleteDriver = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params;
        const driver = await Driver.findByIdAndDelete(id);
        if(!driver) res.status(400).json({message: "Driver not found"})
        res.status(200).json({message: "Driver deleted"})
    }catch(error){
        res.status(500)
        throw new Error(error.message)
    }
})

module.exports={    getDrivers,
                    getDriver,
                    createDriver,
                    updateDriver,
                    deleteDriver
};
