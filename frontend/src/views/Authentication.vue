<template>
    <div class="form">
        <Signup v-if="currentView === 'signup'" />
        <Login v-else />
        
        <button @click="toggleView">{{ currentView === 'signup' ? 'Login form' : 'Signup form' }}</button>
    </div>
  </template>
  
  <script>
  import Signup from '../components/Signup.vue'
  import Login from '../components/Login.vue'
  
  export default {
    name: 'Authentication',
    components: {
      Signup,
      Login
    },
    data() {
      return {
        currentView: 'login' 
      };
    },
    methods: {
      toggleView() {
        this.currentView = this.currentView === 'signup' ? 'login' : 'signup';
      }
    }
  }
  </script>
  
  <style scoped>

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 20px; 
}

button {
    color: #565555;
    font-size: 0.7em;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 20px;
}

  
  </style>
  