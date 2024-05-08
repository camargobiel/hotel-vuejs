<script setup>
  import Sidebar from '../organisms/Sidebar.vue';
</script>

<template>
  <div class="flex gap-10">
    <Sidebar />
    <slot name="page">default page</slot>
  </div>
</template>

<style scoped>

</style>
