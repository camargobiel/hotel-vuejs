<script setup>

  defineProps({})
</script>

<template>
  <p
    class="text-sm text-red-500"
  >
    <slot name="error-message">default text</slot>
  </p>
</template>

<style scoped>

</style>
