<script setup lang="ts">
import heartFilled from "../../assets/heartFilled.png";
import heartOutline from "../../assets/heartOutline.png";
const props = defineProps<{
  car: {
    id: number;
    name: string;
    price: string;
    url: string;
    seats: number;
    miles: string;
    features: string[];
    description: string;
  };
  favored: boolean;
}>();

const emit = defineEmits(["favor"]);
</script>

<template>
  <div
    class="
      shadow
      border
      w-full
      overflow-hidden
      mb-5
      cursor-pointer
      h-[200px]
      relative
    "
  >
    {{ favored }}
    <img
      :src="favored ? heartFilled : heartOutline"
      class="absolute w-7 right-5 z-20 top-2"
      @click="emit('favor', car.id)"
    />
    <div
      class="flex h-full"
      @click="navigateTo(`/car/${car.name.toLowerCase()}-${car.id}`)"
    >
      <NuxtImg :src="car.url" alt="" loading="lazy" class="w-[300px] h-full" />
      <div class="p-4 flex flex-col relative w-full">
        <div>
          <h1 class="text-2xl text-blue-800">{{ car.name }}</h1>
          <p class="text-gray-700">
            {{ car.description }}
          </p>
        </div>
        <h1 class="mt-auto text-xl">${{ car.price }}</h1>
      </div>
    </div>
  </div>
</template>