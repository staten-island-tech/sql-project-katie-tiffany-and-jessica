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
<button @click="logout">Log out</button>
</div>

  <p>
    Don't have an account? 
    <router-link to="/sign">Sign Up</router-link>
  </p>
</template>


<script setup>
import { ref } from "vue";
import { supabase } from "../clients/supabase"

let email=ref("");
let password=ref("");

//login
async function login() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })

  if (error) {
    console.log(error);
  }
  else {
    console.log(data);
  }
}

//logout
async function logout () {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log(error);
  }
  else {
    console.log("Successfully logged out");
  }
}

</script>
