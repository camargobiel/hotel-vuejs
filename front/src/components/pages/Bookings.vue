<script setup>
  import CreateBooking from "../molecules/modals/CreateBooking.vue"
  import OutlineButton from "../atoms/OutlineButton.vue";
  import Page from "../templates/Page.vue";
  import BookingCard from "../molecules/BookingCard.vue";

  import { ref } from 'vue'

  const isCreateBookingOpen = ref(false)
</script>

<template>
  <Page>
    <template #page>
      <main>
        <section class="p-10">
          <CreateBooking
            v-if="isCreateBookingOpen"
            :is-open="isCreateBookingOpen"
            v-on:modal-close="() => {
              fetchGuests()
              fetchBookings()
              isCreateBookingOpen = false
            }"
            :guests="guests"
          />
          <div class="flex items-center gap-10">
            <h2 class="text-2xl text-blue-600 font-semibold">Reservas</h2>
            <OutlineButton
              @click="() => {
                isCreateBookingOpen = true
              }"
            >
              <template #button-text>Nova reserva</template>
            </OutlineButton>
          </div>
        </section>
        <section class="grid sm:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 px-10 gap-4">
          <div v-for="booking in bookings" :key="booking.id">
            <BookingCard
              :booking={booking}
              :guests="guests"
              :fetchBookings="fetchBookings"
            />
          </div>
        </section>
      </main>
    </template>
  </Page>
</template>

<script>
  export default {
    data() {
      return {
        guests: [],
        bookings: []
      };
    },
    methods: {
      async fetchBookings () {
        try {
          this.bookings = []
          const response = await fetch('http://localhost:4555/booking');
          const bookings = await response.json();
          this.bookings = JSON.parse(JSON.stringify(bookings))
        } catch (error) {
          console.error(error);
        }
      },
      async fetchGuests () {
        try {
          this.guests = []
          const response = await fetch('http://localhost:4555/guests');
          const guests = await response.json();
          this.guests = JSON.parse(JSON.stringify(guests))
        } catch (error) {
          console.error(error);
        }
      }
    },
    async beforeMount() {
      await this.fetchBookings()
      await this.fetchGuests()
    },
  }
</script>

<style scoped>

</style>
