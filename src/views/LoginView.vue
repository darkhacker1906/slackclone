<template>
    <div class="form-container">
      <div class="form-box">
        <h1 class="form-heading">Log in to your account</h1>
        <p class="form-text">
          Need a account? 
          <router-link to="/signup" class="form-link">Create an account</router-link>
        </p>
        <form>
          <div class="form-group">
            <label for="username" class="form-label">Username or Email</label>
            <input 
              type="text" 
              id="username" 
              class="form-input"
              placeholder="Enter your username or email"
              size="42"            >
          </div>
          <div class="form-group">
            <label for="password" class="form-label">Password</label>
            <div class="input-wrapper">
              <input 
                type="password" 
                id="password" 
                class="form-input"
                placeholder="Enter your password"
                size="42" 
              >
            </div>
          </div>
          <button 
            class="form-btn"
            @click="login"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods:{
      login(){
        this.$router.push('/home');
      }
    }
  }
  </script>
  
  <style scoped>
  /* Custom styles */
  
  </style>