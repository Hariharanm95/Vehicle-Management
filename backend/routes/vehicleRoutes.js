const express = require('express');
const router = express.Router();

// Assuming getVehicles is a function that handles the request
const { getVehicles,
        getVehicle,
        createVehicle,
        updateVehicle,
        deleteVehicle    } = require('../controllers/vehicleControllers.js');

// Use the function as a callback for the route
// const requireAuth = require('../middleware/requireAuth');
// router.use(requireAuth);
router.get('/', getVehicles);
router.get('/:id', getVehicle);
router.post('/', createVehicle);
router.put('/:id', updateVehicle);
router.delete('/:id', deleteVehicle);

module.exports = router;
