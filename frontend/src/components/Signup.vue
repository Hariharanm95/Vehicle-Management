<template>
    <div class="signup-container">
        <h1>Sign Up</h1>
        <hr>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <div class="form-group">
          <label for="role">Role</label>
          <select id="role" v-model="role">
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: "Signup",
    data() {
      return {
        name: '',
        email: '',
        password: '',
        role: 'user',
        error: ''
      };
    },
    methods: {
    async handleSubmit() {
      try {
        const response = await axios.post('http://localhost:3000/api/users/signup', {
          name: this.name,
          email: this.email,
          password: this.password,
          role: this.role
        });
        // Handle response here, such as showing a success message
        localStorage.setItem('userToken', response.data.token);
        localStorage.setItem('userRole', response.data.role);
        console.log(response.data);
        console.log("Success")
        // or redirecting to another route
        this.$router.push('/');
      } catch (error) {
        // Display errors from the server
        if (error.response && error.response.data) {
          this.error = error.response.data.error;
        } else {
          this.error = 'Failed to sign up.';
        }
      }
    }
  }
};
  </script>
  
  <style scoped>

  .signup-container h1{
    display: flex;
    justify-content: center;
    font-size: large;
    font-weight: bolder;
    margin-bottom: 40px;
  }

  .signup-container {
    
    color: #565555;
    font-size: 0.7em;
    text-transform: uppercase;
    letter-spacing: 1px;
    width: 450px;
    margin: auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-top: 20px;
    margin-bottom: 30px;
  }
  
  label {
    display: block;
  }
  
  input[type="text"],
  input[type="email"],
  input[type="password"],
  select {
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
  