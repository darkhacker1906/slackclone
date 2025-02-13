<template>

    <div class="form-container">
      <div class="form-box">
        <h1 class="form-heading">Sign up your account</h1>
        <p class="form-text">
          Have an account
          <router-link to="/" class="form-link">Login to your account</router-link>
        </p>
        <form>
          <div class="form-group">
            <label for="username" class="form-label">Username</label>
            <input 
              type="text" 
              id="username" 
              class="form-input"
              placeholder="Enter your username"
              size="42" 
            >
          </div>
          <div class="form-group">
            <label for="username" class="form-label">Email</label>
            <input 
              type="text" 
              id="email" 
              class="form-input"
              placeholder="Enter your email"
              size="42" 
            >
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
            type="submit" 
            class="form-btn"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>

  </template>
  

<script>

export default {


}
</script>

<style>

</style>