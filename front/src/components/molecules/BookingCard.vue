<script setup>
  import EditBooking from "./modals/EditBooking.vue"

  import { ref } from 'vue'

  const isEditBookingOpen = ref(false)

  const props = defineProps(["booking", "guests", "fetchBookings"])
  const fetchBookings = props.fetchBookings
  const { booking } = JSON.parse(JSON.stringify(props.booking))
</script>

<template>
  <div class="p-3 border rounded-lg border-zinc-200 flex flex-col gap-5">
    <EditBooking
      :is-open="isEditBookingOpen"
      v-on:modal-close="() => {
        fetchBookings()
        isEditBookingOpen = false
      }"
      :guests="guests"
      :booking="booking"
    />
    <div class="flex gap-4 items-center border-b border-b-zinc-200 pb-3">
      <div>
        <p class="text-zinc-900 text-sm"><strong>Reserva:</strong> {{ booking.identifier }}</p>
      </div>
      <button
        @click="() => {
          isEditBookingOpen = true
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
      <p class="text-zinc-600 text-sm">Hóspede: {{ booking.guest }}</p>
      <p class="text-zinc-600 text-sm">Data da entrada: {{ booking.startDate }}</p>
      <p class="text-zinc-600 text-sm">Data da saída: {{ booking.endDate }}</p>
      <p class="text-zinc-600 text-sm">Status: {{ booking.status }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>
