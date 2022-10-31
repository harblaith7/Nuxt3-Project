<script setup lang="ts">
const props = defineProps<{
  car: {
    id: number;
    url: string;
    name: string;
  };
}>();
</script>

<template>
  <div class="w-[31%] mb-5 shadow rounded overflow-hidden">
    <img :src="props.car.url" alt="" class="h-48 w-full" />
    <h4 class="uppercase font-bold text-2xl p-2">{{ props.car.name }}</h4>
  </div>
</template>