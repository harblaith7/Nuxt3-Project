<script setup lang="ts">
const { cars } = useCar();
</script>

<template>
  <div class="w-full">
    <CarCard v-for="car in cars" :key="car.id" :car="car" />
  </div>
</template>