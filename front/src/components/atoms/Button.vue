<script setup>

  defineProps({})
</script>

<template>
  <button
    class="bg-blue-600 px-5 py-1 rounded-lg text-white text-sm active:bg-blue-400 transition-all"
  >
    <slot name="button-text">default text</slot>
  </button>
</template>

<style scoped>

</style>
