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
import { RouterLink } from 'vue-router'
import { ref } from "vue";
import { supabase } from "../clients/supabase";

let email = ref("");
let password = ref("");

async function createAcc() {
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value
  })
  if (error) {
    console.log(error)
  }
  else {
    console.log(data)   
  }
}
</script>