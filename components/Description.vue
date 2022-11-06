<script setup>
const route = useRoute()
</script>


<template>
  <div class="mt-5">
    <p class="mb-10">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis odio et
      laboriosam! Numquam ut rem, blanditiis est rerum tenetur maxime delectus
      magni voluptatem natus, minus doloremque ducimus, repellat sed
      perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
      laboriosam perspiciatis laborum excepturi sit dolor vel quia illum animi
      ea tempora nisi quod necessitatibus et eveniet quam atque, repellendus ut?
    </p>
    <NuxtLink :to="`${route.path}/contact`" class="bg-blue-400 text-white px-10 py-3 rounded">Contact</NuxtLink>
  </div>
</template>