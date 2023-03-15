<script setup lang="ts">

</script>

<template>
  <router-link to="/">
    <button type="button">Z</button>
  </router-link>
  |
  <router-link to="/home">
    <button type="button">A</button>
  </router-link>
  |
  <router-link to="/test">
    <button type="button">B</button>
  </router-link>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
