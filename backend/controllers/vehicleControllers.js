const Vehicle = require('../models/vehicleModel.js')   
const asyncHandler = require('express-async-handler')
      
const getVehicles = asyncHandler(async(req,res)=>{
    try{
        const vehicles = await Vehicle.find({});
        res.status(200).json(vehicles)
    }catch(error){
        res.status(500)
        throw new Error(error.message)
    }
})

const getVehicle = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params;
        const vehicle = await Vehicle.findById(id);
        res.status(200).json(vehicle)
    }catch(error){
        res.status(500)
        throw new Error(error.message)
    }
})

const createVehicle = asyncHandler(async(req,res)=>{
    try{
        const vehicle = await Vehicle.create(req.body);
        res.status(200).json(vehicle)
    }catch(error){
        res.status(500)
        throw new Error(error.message)
    }
})

const updateVehicle = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params;
        const vehicle = await Vehicle.findByIdAndUpdate(id);
        if(!vehicle) res.status(400).json({message: "Vehicle not found"})
        const updatedVehicle = await Vehicle.findById(id);
        res.status(200).json(updatedVehicle)
    }catch(error){
        res.status(500)
        throw new Error(error.message)
    }
})

const deleteVehicle = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params;
        const vehicle = await Vehicle.findByIdAndDelete(id);
        if(!vehicle) res.status(400).json({message: "Vehicle not found"})
        res.status(200).json({message: "Vehicle deleted"})
    }catch(error){
        res.status(500)
        throw new Error(error.message)
    }
})


module.exports = {  getVehicles,
                    getVehicle,
                    createVehicle,
                    updateVehicle,
                    deleteVehicle,
}