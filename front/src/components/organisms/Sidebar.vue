<script setup>
  import Button from '../atoms/Button.vue';
  import OutlineButton from '../atoms/OutlineButton.vue';

  const currentPath = location.pathname
</script>

<template>
  <div class="border w-64 h-screen">
    <div class="flex justify-center flex-col gap-3 mt-40 p-5">
      <a href="/" class="w-full">
        <Button class="w-full" v-if="currentPath === '/'">
          <template #button-text>
            Hóspedes
          </template>
        </Button>
        <OutlineButton class="w-full" v-if="currentPath !== '/'">
          <template #button-text>
            Hóspedes
          </template>
        </OutlineButton>
      </a>
      <a href="/reservas" class="w-full">
        <Button class="w-full" v-if="currentPath === '/reservas'">
          <template #button-text>
            Reservas
          </template>
        </Button>
        <OutlineButton class="w-full" v-if="currentPath !== '/reservas'">
          <template #button-text>
            Reservas
          </template>
        </OutlineButton>
      </a>
    </div>
  </div>
</template>

<style scoped>

</style>
