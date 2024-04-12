<template>
  <form @submit.prevent="handleSubmit" method="post" >

    <label>Destination Place:</label>
    <input type="text" required v-model="registration.place">
    
    <label>date:</label>
    <input type="text" required v-model="registration.date">

    <label>Time:</label>
    <input type="text" required v-model="registration.time">

    <label>people Count:</label>
    <input type="text" required v-model="registration.peopleCount">

    <label>Driver Name:</label>
    <input type="text" required v-model="registration.driverName">

    <label>Driver Id:</label>
    <input type="text" required v-model="registration.driverId">

    <label>Vehicle Number:</label>
    <input type="text" required v-model="registration.vehicleNumber">
    
    <label>vehicleType:</label>
    <select v-model="registration.vehicleType">
        <option value="bus">Bus</option>
        <option value="car">Car</option>
        <option value="tempo">Tempo</option>
        <option value="goodstruck">Goods Truck</option>
    </select>

    <label>Purpose:</label>
    <input type="text" required v-model="registration.purpose">

    <label>User Id:</label>
    <input type="text" required v-model="registration.userId">

    <div class="submit">
        <button>Submit</button>
    </div>

  </form>
</template>

<script>



export default {
    data(){
        return{
            registration: {
                place: null,
                date: null,
                time: null,
                peopleCount: null,
                driverName: null,
                driverId: null,
                vehicleNumber: null,
                vehicleType: null,
                purpose: null,
                userId: null,
            }
        }
    },
    methods: {
        handleSubmit() {
            this.axios.post('http://localhost:3000/api/registrations/', this.registration)
            .then((response) => {   
                console.log('Success'); 
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
        }
    }
}

</script>

<style>
    form {
        min-width: 520px;
        margin: auto;
        background: white;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
        display: flex; /* Add flexbox */
        flex-direction: column; /* Set flex direction to column */
        justify-content: space-between; /* Space evenly between elements */
        height: 100%; /* Set height to 100% */
    }

    label {
        color: #aaa;
        display: inline-block;
        margin: 15px 0;
        font-size: 0.6em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }

    input,
    select {
        display: inline-block;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555;
    }

    .submit button {
        background: #b78bfe;
        padding: 10px 20px;
        color: white;
        border-radius: 10px;
        
    }

    .submit {
        text-align: center;
        padding: 20px;
    }

    .error {
        color: #ff0062;
        margin-top: 10px;
        font-size: 0.8em;
        font-weight: bold;
    }


</style>
