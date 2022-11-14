<script setup>
const route = useRoute();
const router = useRouter();
const { makes } = useCar();

const modal = ref({
  make: false,
  location: false,
  price: false,
});

const city = ref("");
const priceRange = ref({
  min: "",
  max: "",
});

const onChangeMake = (make) => {
  updateShowModal("make");
  navigateTo(`/city/${route.params.city}/car/${make.toLowerCase()}`);
};

const onChangeLocation = () => {
  updateShowModal("location");
  navigateTo(`/city/${city.value}/car/${route.params.make}`);
  city.value = "";
};

const onPriceChange = () => {
  updateShowModal("price");
  router.push({
    query: {
      priceLt: priceRange.value.min,
      priceGt: priceRange.value.max,
    },
  });
};

const updateShowModal = (key) => {
  modal.value[key] = !modal.value[key];
};

const priceRangeText = computed(() => {
  if (!priceRange.value.min && !priceRange.value.max) {
    return "Any";
  } else if (!priceRange.value.min && priceRange.value.max) {
    return `< $${priceRange.value.max}`;
  } else if (priceRange.value.min && !priceRange.value.max) {
    return `> $${priceRange.value.min}`;
  } else {
    return `$${priceRange.value.min}-$${priceRange.value.max}`;
  }
});
</script>

<template>
  <div class="shadow border w-64 mr-10 z-30 h-[190px]">
    <!-- LOCATION -->
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Location</h3>
      <h3 class="text-blue-400 capitalize" @click="updateShowModal('location')">
        {{ route.params.city }}
      </h3>
      <div
        class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white"
        v-if="modal.location"
      >
        <input type="text" class="border p-1 rounded" v-model="city" />
        <button
          class="bg-blue-400 w-full mt-2 rounded text-white p-1"
          @click="onChangeLocation"
        >
          Apply
        </button>
      </div>
    </div>
    <!-- MAKE -->
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Make</h3>
      <h3 class="text-blue-400 capitalize" @click="updateShowModal('make')">
        {{ route.params.make || "Any" }}
      </h3>
      <div
        class="
          absolute
          border
          shadow
          left-56
          p-5
          top-1
          -m-1
          w-[600px]
          flex
          justify-between
          flex-wrap
          bg-white
        "
        v-if="modal.make"
      >
        <h4
          v-for="make in makes"
          :key="make"
          class="w-1/3"
          @click="() => onChangeMake(make)"
        >
          {{ make }}
        </h4>
      </div>
    </div>
    <!-- PRICE -->
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Price</h3>
      <h3 class="text-blue-400 capitalize" @click="updateShowModal('price')">
        {{ priceRangeText }}
      </h3>
      <div
        class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white"
        v-if="modal.price"
      >
        <input
          type="number"
          class="border p-1 rounded"
          v-model="priceRange.min"
          placeholder="Min"
        />
        <input
          type="number"
          class="border p-1 rounded mt-2"
          v-model="priceRange.max"
          placeholder="Max"
        />
        <button
          class="bg-blue-400 w-full mt-2 rounded text-white p-1"
          @click="onPriceChange"
        >
          Apply
        </button>
      </div>
    </div>
  </div>
</template>