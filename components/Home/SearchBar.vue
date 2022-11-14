<script setup lang="ts">
import {} from "#app";

const city = useState("citySearch", () => "");

const showCityError = useState("citySearchError", () => false);

const handleClick = () => {
  showCityError.value = false;

  if (!city.value) {
    return (showCityError.value = true);
  }

  navigateTo(`/city/${city.value.toLowerCase()}/car`);
};
</script>

<template>
  <div
    class="
      font-serif
      w-[1000px]
      text-2xl
      rounded-full
      bg-white
      flex
      justify-between
      overflow-hidden
      drop-shadow-2xl
      mx-auto
    "
  >
    <input
      class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none"
      :class="`${showCityError ? 'placeholder:text-red-500' : ''}`"
      type="text"
      placeholder="Search by city..."
      v-model="city"
    />
    <button class="bg-sky-500 mr-auto px-24 text-white" @click="handleClick">
      Search
    </button>
  </div>
</template>