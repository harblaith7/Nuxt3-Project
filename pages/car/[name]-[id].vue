<script setup lang="ts">
import {} from "#app";
const route = useRoute();
const { cars } = useCar();

const car = computed(() => {
  console.log(cars);
  return cars.find((c) => {
    return c.id === parseInt(route.params.id as string);
  });
});

if (!car.value) {
  console.log(car.value);
  throw createError({
    statusCode: 404,
    message: "Car not found",
  });
}

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