<template>
    <div>
        <h2>Sign Into your Employee Account</h2>
        <form @submit.prevent="handleSignIn"></form>
        <div>
            <label for="ID">Enter Your Employee ID</label>
            <input type="numbers" id="ID" v-model="ID"/>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>