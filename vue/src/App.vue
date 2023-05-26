<template>
  <div>

  </div>
</template>

<script setup>

let { data: Store, error } = await supabase
  .from('Store')
  .select('store_name')



</script>

<style>

</style>