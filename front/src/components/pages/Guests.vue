<script setup>
  import CreateGuest from "../molecules/modals/CreateGuest.vue"
  import GuestCard from '../molecules/GuestCard.vue'
  import OutlineButton from "../atoms/OutlineButton.vue";
  import Page from "../templates/Page.vue";

  import { ref } from 'vue'

  const isCreateGuestOpen = ref(false)
</script>

<template>
  <Page>
    <template #page>
      <main>
        <section class="p-10">
          <CreateGuest
            v-if="isCreateGuestOpen"
            :is-open="isCreateGuestOpen"
            v-on:modal-close="() => {
              fetchGuests()
              isCreateGuestOpen = false
            }"
          />
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
        <section class="grid sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-10 gap-4 min-w-[280px]">
          <div v-for="guest in guests" :key="guest.id" class="">
            <GuestCard :guest={guest} :fetchGuests="fetchGuests" />
          </div>
        </section>
      </main>
    </template>
  </Page>
</template>

<script>
  export default {
    props: {
    },
    data() {
      return {
        guests: {},
      };
    },
    methods: {
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
    beforeMount() {
      this.fetchGuests()
    },
  }
</script>

<style scoped>

</style>
