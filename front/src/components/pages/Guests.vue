<script setup>
  import CreateGuest from "../molecules/modals/CreateGuest.vue"
  import GuestCard from '../molecules/GuestCard.vue'
  import OutlineButton from "../atoms/OutlineButton.vue";

  import { ref } from 'vue'

  const isCreateGuestOpen = ref(false)
</script>

<template>
  <main>
    <section class="p-10">
      <CreateGuest :is-open="isCreateGuestOpen" v-on:modal-close="() => {
        isCreateGuestOpen = false
      }" />
      <div class="flex items-center gap-10">
        <h2 class="text-2xl text-blue-600 font-semibold">Hóspedes</h2>
        <OutlineButton
          @click="() => {
            isCreateGuestOpen = true
          }"
        >
          <template #button-text>Novo hóspede</template>
        </OutlineButton>
      </div>
    </section>
    <section class="px-10 w-96">
      <GuestCard />
    </section>
  </main>
</template>

<style scoped>

</style>
