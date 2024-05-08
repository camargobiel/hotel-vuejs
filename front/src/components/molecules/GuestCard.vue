<script setup>
  import EditGuest from "./modals/EditGuest.vue"

  import { ref } from 'vue'

  const isEditGuestOpen = ref(false)

  const props = defineProps(["guest", "fetchGuests"])
  const fetchGuests = props.fetchGuests
  const { guest } = JSON.parse(JSON.stringify(props.guest))
</script>

<template>
  <div class="p-3 border rounded-lg border-zinc-200 flex flex-col gap-5">
    <EditGuest
      :is-open="isEditGuestOpen"
      v-on:modal-close="() => {
        fetchGuests()
        isEditGuestOpen = false
      }"
      :guest="guest"
    />
    <div class="flex gap-4 items-center border-b border-b-zinc-200 pb-3">
      <img
        src="../../assets/svgs/profile-pic.svg"
        alt="profile picture"
        class="w-7"
      />
      <div>
        <p class="text-zinc-900 text-sm">{{guest.name}}</p>
      </div>
      <button
        @click="() => {
          isEditGuestOpen = true
        }"
        class="ml-auto"
      >
        <img
          src="../../assets/svgs/edit.svg"
          alt="pencil icon"
          class="w-5 ml-5"
        />
      </button>
    </div>
    <div>
      <p class="text-zinc-600 text-sm">E-mail: {{ guest.email }}</p>
      <p class="text-zinc-600 text-sm">CPF: {{ guest.cpf }}</p>
      <p class="text-zinc-600 text-sm">Telefone: {{ guest.phone }}</p>
      <p class="text-zinc-600 text-sm">Endereço: {{ guest.address }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>
