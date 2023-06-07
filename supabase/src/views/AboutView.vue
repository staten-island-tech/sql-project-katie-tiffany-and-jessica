<template>
      <h1>Login</h1>
  <div class="input">
  <label for="email">Email</label>
  <input type="email" id="email" v-model="email"/>
</div>

<div class="input">
  <label for="email">Password</label>
  <input type="password" id="password" v-model="password" />
</div>

<div class="buttons">
<button @click="login">Log in</button>
<button @click="logOut">Log out</button>
</div>

  <p>
    Don't have an account? 
    <router-link to="/sign">Sign Up</router-link>
  </p>
</template>


<script setup>
import { ref } from "vue";
//import { supabase } from "../supabase";

let email=ref("");
let password=ref("");

//login
function login () {
console.log("log in")
}

//logout
function logOut () {
  console.log("log out")
}
</script>
