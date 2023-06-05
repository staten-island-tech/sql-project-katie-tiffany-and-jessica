<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '../supabase'
</script>

<template>
<h1>Login</h1>
<h2>Email</h2>
<input type="text" id="user">
<h2>Password</h2>
<input type="text" id="pw">
<button>Enter</button>
</template>
