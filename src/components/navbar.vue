<template>
  <header class="nav shadow-sm bg-[#5D2D5F]">
    <!-- Left: Search Bar -->
    <div class="search-container">
      <input type="text" v-model="searchQuery" placeholder="Search..." class="search-input " />
    </div>

    <!-- Right: User Avatar and Dropdown -->
    <div class="user-profile">
      <div class="dropdown" @click="toggleDropdown">
        <img src="../assets/images/user.png" height="25" width="25" class="cursor-pointer" />
        <div v-if="dropdownVisible" class="dropdown-content w-[150px]">
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <a href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
              <a href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
            </li>
            <li>
              <a class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" @click="logout">Sign
                out</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
  
  <script>
  export default {

    data() {
      return {
        searchQuery: '',
        dropdownVisible: false,
      };
    },
    methods: {
      toggleDropdown() {
        this.dropdownVisible = !this.dropdownVisible;
      },
      logout() {
        this.$router.push('/');
      },
    },
  };
  </script>
  
  <style scoped>
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: #333; */
    
    padding: 10px 20px;
  }
  
  /* .search-container {
    flex: 1;
  } */
  
  .search-input {
    width: 400px;
    padding: 5px 10px;
    border-radius: 20px;
    border: none;
    outline: none;
    background:#69436b;
    color:#fff;
  }
  
  .user-profile {
    display: flex;
    align-items: center;
    position: relative;
  }
  
  .avatar {
    margin-right: 10px;
  }
  
  .avatar-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .dropdown-icon {
    /* color: white; */
    cursor: pointer;
    font-size: 16px;
  }
  
  .dropdown-content {
    position: absolute;
    top: 40px;
    right: 0;
    background-color: #fff;
    color: #333;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .dropdown-content a {
    display: block;
    padding: 8px;
    text-decoration: none;
  }
  
  .dropdown-content a:hover {
    background-color: #f1f1f1;
  }
  </style>
  