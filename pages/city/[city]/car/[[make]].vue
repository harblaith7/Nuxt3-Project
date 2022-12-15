<script setup>
const route = useRoute();
const { data: cars, refresh } = await useCarListings(route.params.city, {
  minPrice: route.query.minPrice,
  maxPrice: route.query.maxPrice,
  make: route.params.make,
});

watch(
  () => route.query,
  () => {
    window.location.reload(true);
  }
);
</script>

<template>
  <div>
    <CarCards :cars="cars" />
  </div>
</template>
