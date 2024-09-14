<template>
    <div class="login-container">
      <h1>Login</h1>
      <hr>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Login</button>
      </form>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  

  <script>
  import axios from 'axios';
  
  export default {
    name: "Login",
    data() {
      return {
        email: '',
        password: '',
        error: ''
      };
    },
    methods: {
        async handleSubmit() {
            try {
                const response = await axios.post('http://localhost:3000/api/users/login', {
                email: this.email,
                password: this.password
                });
                // Store the token in local storage
                localStorage.setItem('userToken', response.data.token);
                localStorage.setItem('userRole', response.data.role);
                console.log(response.data.role)
                this.$router.push('/');
            } catch (error) {
                if (error.response && error.response.data) {
                this.error = error.response.data.error;
                } else {
                this.error = 'Failed to login.';
                }
            }
        }
    }
  };
  </script>
  

  <style scoped>
  .login-container {
    color: #565555;
    font-size: 0.7em;
    text-transform: uppercase;
    letter-spacing: 1px;
    width: 450px;
    margin: auto;
    padding: 20px;
    width: 450px;
    margin: auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .login-container h1 {
    display: flex;
    justify-content: center;
    font-size: large;
    font-weight: bolder;
    margin-bottom: 40px;
  }
  
  .form-group {
    margin-top: 20px;
    margin-bottom: 30px;
  }
  
  label {
    display: block;
  }
  
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border-radius: 5px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #b78bfe;
    border-radius: 5px;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #a670fd;
  }
  </style>

