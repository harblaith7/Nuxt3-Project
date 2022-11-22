<script setup lang="ts">
import {} from "#app";

const props = defineProps<{
  car: {
    url: string;
    name: string;
    price: string;
    seats: number;
    miles: string;
  };
}>();
</script>

<template>
  <div class="mt-10">
    <NuxtImg :src="car.url" alt="" class="w-full" />
    <h1 class="mt-10 text-4xl">{{ car.name }}</h1>
    <div class="text-slate-500 flex text-lg mt-3 border-b pb-5 justify-between">
      <div class="flex">
        <p class="mr-2">{{ car.seats }} seats</p>
        <p class="mr-2">|</p>
        <p class="mr-2">{{ car.miles }} miles</p>
      </div>
      <div>
        <p class="font-bold text-3xl">${{ car.price }}</p>
      </div>
    </div>
  </div>
</template>
