<script setup lang="ts">
const route = useRoute();

const isHomepage = route.path === "/";
const car = route.params.carSlug as string | undefined;
</script>

<template>
  <div
    class="relative h-screen w-100 bg-no-repeat bg-cover bg-bottom"
    :class="
      isHomepage
        ? `bg-[url('https://carconfigurator.ferrari.com/assets/cars/portofinom/packages/default/car-ferrari-portofino-m_splash.jpg')]`
        : `bg-white`
    "
  >
    <div class="z-10 absolute w-full h-full flex justify-center items-center">
      <div class="text-center w-1/2">
        <h1
          class="text-8xl font-serif mb-10"
          :class="isHomepage ? 'text-white' : 'text-black'"
        >
          Find your <span v-if="isHomepage">drive</span>
          <span v-else class="capitalize">{{ route.params.carSlug }}</span>
        </h1>
        <HomeSearchBar />
      </div>
    </div>
    <div
      v-if="isHomepage"
      class="absolute w-full h-full bg-black opacity-50 z-1"
    ></div>
  </div>
</template>