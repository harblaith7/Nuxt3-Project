<script setup lang="ts">
import {} from "#app";

const city = useState("citySearch", () => "");

const showCityError = useState("citySearchError", () => false);

const router = useRouter();
const props = defineProps<{
  car: string | null;
}>();

const handleClick = () => {
  showCityError.value = false;

  if (!city.value) {
    return showCityError.value = true;
  }

  router.push({
    path: `/city/${city.value.toLowerCase()}/car${
      props.car ? `/${props.car}` : "/"
    }`
  });
};
</script>

<template>
  <div
    class="
      font-serif
      w-full
      text-2xl
      rounded-full
      bg-white
      flex
      justify-between
      overflow-hidden
      drop-shadow-2xl
    "
  >
    <input
      class="py-3 px-5 w-full text-2xl rounded-full w-3/4 focus:outline-none"
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