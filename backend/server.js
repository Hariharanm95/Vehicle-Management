const express = require('express')
const app = express()
var cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')
const errorMiddleware = require('./middleware/errorMiddleware.js')
const vehicleRoutes = require('./routes/vehicleRoutes.js')
const userRoutes = require('./routes/userRoutes.js')
const driverRoutes = require('./routes/driverRoutes.js')
const registrationRoutes = require('./routes/registrationRoutes.js')

app.use(cors())

app.use(express.json())

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.use('/api/vehicles', vehicleRoutes);
app.use('/api/users', userRoutes);
app.use('/api/drivers', driverRoutes);
app.use('/api/registrations', registrationRoutes);


app.use(errorMiddleware)

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to the database")
        app.listen(process.env.PORT, ()=>{
            console.log(`Server listening on port ${process.env.PORT}`);
        })
    }).catch((error)=>{
        console.log(error)
})