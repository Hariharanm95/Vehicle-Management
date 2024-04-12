const Registration =  require('../models/registrationModel');
const asyncHandler = require('express-async-handler');

const getRegistrations = asyncHandler(async(req,res)=>{
    try{
        const registrations = await Registration.find({});
        res.status(200).json(registrations)
    }catch(error){
        res.status(500)
        throw new Error(error.message)
    }
})

const getRegistration = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params;
        const registration = await Registration.findById(id);
        res.status(200).json(registration)
    }catch(error){
        res.status(500)
        throw new Error(error.message)
    }
})

const createRegistration = asyncHandler(async(req,res)=>{
    try{
        const registration = await Registration.create(req.body);
        res.status(200).json(registration)
    }catch(error){
        res.status(500)
        throw new Error(error.message)
    }
})

const updateRegistration = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params;
        const registration = await Registration.findByIdAndUpdate(id);
        if(!registration) res.status(400).json({message: "Registration not found"})
        const updatedRegistration = await Registration.findById(id);
        res.status(200).json(updatedRegistration)
    }catch(error){
        res.status(500)
        throw new Error(error.message)
    }
})

const deleteRegistration = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params;
        const registration = await Registration.findByIdAndDelete(id);
        if(!registration) res.status(400).json({message: "Registration not found"})
        res.status(200).json({message: "Registration deleted"})
    }catch(error){
        res.status(500)
        throw new Error(error.message)
    }
})

module.exports = {
    getRegistrations,
    getRegistration,
    createRegistration,
    updateRegistration,
    deleteRegistration
}