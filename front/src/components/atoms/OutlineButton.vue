<script setup>

  defineProps({})
</script>

<template>
  <button
    class="bg-white border border-blue-600 px-5 py-1 rounded-lg text-blue-600 text-sm active:bg-blue-50 transition-all"
  >
    <slot name="button-text">default text</slot>
  </button>
</template>

<style scoped>

</style>
