<template>
      <h1>Sign Up</h1>
  <div class="input">
  <label for="email">Email</label>
  <input type="email" id="email" v-model="email"/>
</div>

<div class="input">
  <label for="email">Password</label>
  <input type="password" id="password" v-model="password" />
</div>

<button @click="createAcc">Sign Up</button>

<p>
    Already have an account? 
    <router-link to="/about">Login</router-link>
</p>
</template>

<script setup>
import { ref } from "vue";
let email=ref("");
let password=ref("");

function createAcc () {
console.log("create account")
}
</script>