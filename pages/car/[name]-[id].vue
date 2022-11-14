<script setup lang="ts">
const route = useRoute();
const { cars } = useCar();

const car = cars.find((c) => {
  return c.id === parseInt(route.params.id as string);
});

definePageMeta({
  layout: "custom",
});
</script>

<template>
  <div v-if="car">
    <CarHero
      :car="{
        url: car.url,
        name: car.name,
        price: car.price,
        seats: car.seats,
        miles: car.miles,
      }"
    />
    <CarAttributes :features="car.features" />
    <CarDescription :description="car.description" />
    <CarContact />
  </div>
</template>