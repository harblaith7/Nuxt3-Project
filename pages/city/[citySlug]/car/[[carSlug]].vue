<script setup lang="ts">
import {} from "#app";
const cars = [
  {
    id: 1,
    name: "Range Rover Sport",
    price: 253,
    url: "https://www.carhelpcanada.com/wp-content/uploads/2019/12/2020-Range-Rover-Evoque-2.jpg",
  },
  {
    id: 2,
    name: "Rolls Royce Ghost",
    price: 1320,
    url: "https://robbreport.com/wp-content/uploads/2021/03/1-5.jpg?w=1000",
  },
  {
    id: 3,
    name: "Mercedes-Benz G-Class",
    price: 755,
    url: "https://media.ed.edmunds-media.com/mercedes-benz/g-class/2021/oem/2021_mercedes-benz_g-class_4dr-suv_amg-g-63_fq_oem_1_1280.jpg",
  },
  {
    id: 4,
    name: "Porsche Taycan",
    price: 55,
    url: "https://www.topgear.com/sites/default/files/cars-car/carousel/2021/02/pcgb20_1441_fine.jpg",
  },
];
const route = useRoute();

const capitalize = (string) => {
  return string.replace(/\b\w/g, (l) => l.toUpperCase());
};

const title = computed(
  () =>
    `${
      route.params.carSlug ? capitalize(route.params.carSlug) : "Cars"
    } in ${capitalize(route.params.citySlug)}`
);

useHead({
  title,
});
</script>

<template>
  <div>
    <Filter />
    <div class="p-5 flex justify-between flex-wrap">
      <CarCard v-for="car in cars" :key="car.id" :car="car" />
    </div>
  </div>
</template>