<script setup lang="ts">
import {} from "#app";

const city = ref("");
const startDate = ref("");
const endDate = ref("");

const showCityError = ref(false);
const startDateError = ref(false);
const endDateError = ref(false);

const router = useRouter();
const props = defineProps<{
  car: string | null;
}>();

const handleClick = () => {
  showCityError.value = false;
  startDateError.value = false;
  endDateError.value = false;

  if (!city.value) {
    showCityError.value = true;
  }

  if (!endDate.value) {
    endDateError.value = true;
  }

  if (!startDate.value) {
    startDateError.value = true;
  }

  if (startDateError.value || endDateError.value || showCityError.value) return;

  router.push({
    path: `/city/${city.value.toLowerCase()}/car${
      props.car ? `/${props.car}` : "/"
    }`,
    query: { startDate: startDate.value, endDate: endDate.value },
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
      class="py-3 px-5 w-full text-2xl rounded-full w-1/3 focus:outline-none"
      :class="`${showCityError ? 'placeholder:text-red-500' : ''}`"
      type="text"
      placeholder="Search by city..."
      v-model="city"
    />
    <input
      type="text"
      placeholder="Start Date"
      onfocus="(this.type = 'date')"
      onfocusout="(this.type = 'text')"
      class="focus:outline-none w-1/4"
      :class="`${startDateError ? 'placeholder:text-red-500' : ''}`"
      v-model="startDate"
      :min="new Date().toISOString().split('T')[0]"
      :max="endDate ? endDate : ''"
    />
    <input
      type="text"
      placeholder="End Date"
      onfocus="(this.type = 'date')"
      onfocusout="(this.type = 'text')"
      class="focus:outline-none w-1/4"
      :class="`${endDateError ? 'placeholder:text-red-500' : ''}`"
      v-model="endDate"
      :min="startDate ? startDate : new Date().toISOString().split('T')[0]"
    />
    <button class="bg-sky-500 mr-auto px-9 text-white" @click="handleClick">
      Search
    </button>
  </div>
</template>