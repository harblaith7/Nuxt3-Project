<script setup lang="ts">
import heartOutline from "@/assets/images/heart.png";
import heartFilled from "@/assets/images/heartFilled.png";

const props = defineProps<{
  car: {
    id: number;
    name: string;
    price: number;
    url: string;
  };
}>();
const router = useRouter();
const favored = useLocalStorage("favored", {});

const handleFavor = () => {
  const key = `${props.car.id}`;

  if (favored.value[key] === true || favored.value[key] === false) {
    favored.value[key] = !favored.value[key];
  } else {
    favored.value[key] = true;
  }
};
</script>

<template>
  <div class="shadow w-[49.5%] mb-10 lg:w-[32.5%] md:w-[90%] relative">
    <img
      :src="favored[`${props.car.id}`] ? heartFilled : heartOutline"
      class="absolute right-0 w-10 m-2 cursor-pointer"
      @click="handleFavor"
    />
    <div @click="router.push(`/car-${4}`)">
      <img :src="props.car.url" alt="" class="h-[23rem] w-full" />
      <div class="p-2">
        <h2 class="text-3xl mb-5 border-b pb-5">{{ props.car.name }}</h2>

        <p class="text-right font-bold text-xl">${{ props.car.price }}</p>
      </div>
    </div>
  </div>
</template>