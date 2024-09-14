<template>
  <div class="dashboard"> 
      <div class="greetings">
        <h1>Welcome! Hariharan Manimozhi</h1>
        <p>Have a good journey</p>
      </div>
    <br>
    <hr>
    <br>
    <Registrationform/>
  </div>
</template>

<script setup>

import Registrationform from '../components/Registrationform.vue';
</script>

<style scoped>

.dashboard{
  margin: auto;
  color: #565555;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.firstrow{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
}

.greetings{
  background-color: rgb(247, 230, 247);
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(79, 51, 90, 0.1);
  padding: 15px;
  justify-content: center;
}

.count{
  background-color: rgb(62, 36, 62);
  color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(79, 51, 90, 0.1);
  padding: 15px;
  justify-content: center;
}

</style>
