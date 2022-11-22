<script setup lang="ts">
const { cars } = useCar();

const favorite = useLocalStorage("favorite", {});

const handleFavorite = (id: number) => {
  // alert(id);
  if (JSON.stringify(id) in favorite.value) {
    delete favorite.value[id];
  } else {
    favorite.value = {
      ...favorite.value,
      [id]: true,
    };
  }
};
</script>

<template>
  <div class="w-full">
    {{ favorite }}
    <!-- <ClientOnly> -->
    <CarCard
      v-for="car in cars"
      :key="car.id"
      :car="car"
      @favor="handleFavorite"
      :favored="car.id in favorite"
    />
    <!-- </ClientOnly> -->
  </div>
</template>