<script setup>
const router = useRouter();

const props = defineProps({
  listing: Object,
});
</script>

<template>
  <div class="shadow rounded overflow-hidden flex justify-between mb-4">
    <div class="flex">
      <img :src="listing.url" alt="" class="w-80 mr-3 h-44" />
      <div class="p-3">
        <h1 class="text-2xl">{{ listing.name }}</h1>
        <p class="text-blue-400">${{ listing.price }}</p>
      </div>
    </div>
    <div class="p-3 flex">
      <NuxtLink
        class="mr-2 text-blue-400 cursor-pointer"
        to="/profile/listings/view/3"
      >
        View
      </NuxtLink>
      <p class="text-red-400 cursor-pointer">Delete</p>
    </div>
  </div>
</template>