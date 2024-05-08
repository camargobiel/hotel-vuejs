<script setup>
  import Bookings from './components/pages/Bookings.vue';
  import Guests from './components/pages/Guests.vue';

  const routes = {
    '/': Guests,
    '/reservas': Bookings
  }

  const currentPath = window.location.pathname
  const RouteComponent = routes[currentPath]
</script>

<template>
  <RouteComponent />
</template>
