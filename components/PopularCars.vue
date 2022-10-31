<script setup lang="ts">
const { popularCars } = usePopularCars();
</script>

<template>
  <main
    class="
      mx-auto
      mt-4
      max-w-7xl
      space-y-4
      px-4
      xs:px-8
      sm:px-10
      lg:px-16
      pb-16
      w-3/5
    "
  >
    <section>
      <h2 class="py-5 text-3xl font-semibold md:text-5xl mb-9">Our Makes</h2>
      <div class="flex justify-between flex-wrap">
        <PopularCarCard v-for="car in popularCars" :car="car" :key="car.id" />
      </div>
    </section>
  </main>
</template>