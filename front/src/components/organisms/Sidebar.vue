<script setup>
  import Button from '../atoms/Button.vue';
</script>

<template>
  <div class="border w-64 h-screen">
    <div class="flex justify-center flex-col gap-3 mt-40 p-5">
      <a href="/" class="w-full">
        <Button class="w-full">
          <template #button-text>
            Hóspedes
          </template>
        </Button>
      </a>
      <a href="/reservas" class="w-full">
        <Button class="w-full">
          <template #button-text>
            Reservas
          </template>
        </Button>
      </a>
    </div>
  </div>
</template>

<style scoped>

</style>
