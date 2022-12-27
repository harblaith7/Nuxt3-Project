<script setup>
definePageMeta({
  layout: "custom",
});

const { makes } = useCars();
const supabase = useSupabaseClient();
const user = useSupabaseUser();

const info = useState("adInfo", () => {
  return {
    make: "",
    model: "",
    year: "",
    miles: "",
    price: "",
    city: "",
    seats: "",
    features: "",
    description: "",
    image: null,
  };
});
const errorMessage = ref("");

onMounted(() => {
  info.value = {
    make: "",
    model: "",
    year: "",
    miles: "",
    price: "",
    city: "",
    seats: "",
    features: "",
    description: "",
    image: null,
  };
});
const onChangeInput = (data, name) => {
  info.value[name] = data;
};

const inputs = [
  {
    id: 1,
    title: "Model *",
    name: "model",
    placeholder: "Civic",
  },
  {
    id: 2,
    title: "Year *",
    name: "year",
    placeholder: "2019",
  },
  {
    id: 3,
    title: "Miles *",
    name: "miles",
    placeholder: "10000",
  },
  {
    id: 4,
    title: "Price *",
    name: "price",
    placeholder: "85000",
  },
  {
    id: 5,
    title: "City *",
    name: "city",
    placeholder: "Austin",
  },
  {
    id: 6,
    title: "Number of Seats *",
    name: "seats",
    placeholder: "5",
  },
  {
    id: 7,
    title: "Features *",
    name: "features",
    placeholder: "Leather Interior, No Accidents",
  },
];

const isButtonDisabled = computed(() => {
  for (let key in info.value) {
    if (!info.value[key]) return true;
  }
  return false;
});

const handleClick = async () => {
  const fileName = Math.floor(Math.random() * 10000000000000000);
  const { data, error } = await supabase.storage
    .from("images")
    .upload("public/" + fileName, info.value.image);

  const body = {
    ...info.value,
    features: info.value.features.split(", "),
    numberOfSeats: info.value.seats,
    name: `${info.value.make} ${info.value.model}`,
    listerId: user.value.id,
    image: data.path,
  };
  delete body.seats;

  try {
    const response = await $fetch("/api/car/listings", {
      method: "post",
      body,
    });

    navigateTo("/profile/listings");
  } catch (err) {
    errorMessage.value = err.statusMessage;
    await supabase.storage.from("images").remove(data.path);
  }
};
</script>


<template>
  <div>
    <div class="mt-24">
      <h1 class="text-6xl">Create a New Listing</h1>
    </div>
    <div class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
      <CarAdSelect
        title="Make *"
        :options="makes"
        name="make"
        @change-input="onChangeInput"
      />
      <CarAdInput
        v-for="input in inputs"
        :key="input.id"
        :title="input.title"
        :name="input.name"
        :placeholder="input.placeholder"
        @change-input="onChangeInput"
      />
      <CarAdTextarea
        title="Description *"
        name="description"
        placeholder=""
        @change-input="onChangeInput"
      />
      <CarAdImage @change-input="onChangeInput" />
      <div>
        <button
          :disabled="false"
          @click="handleClick"
          class="bg-blue-400 text-white rounded py-2 px-7 mt-3"
        >
          Submit
        </button>
        <p v-if="errorMessage" class="mt-3 text-red-400">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>