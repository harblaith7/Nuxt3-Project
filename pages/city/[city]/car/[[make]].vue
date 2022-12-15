<script setup>
const route = useRoute();
const cars = await useCarListings({ city: route.params.city });
</script>

<template>
  <div>
    <CarCards :cars="cars" />
  </div>
</template>
