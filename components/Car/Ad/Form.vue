<script setup>
const { makes } = useCars();

const info = useState("adInfo", () => {
  return {
    make: "",
    model: "",
    year: "",
    miles: "",
    price: "",
    city: "",
    seats: "",
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
    placeholder: "2018",
  },
  {
    id: 3,
    title: "Miles *",
    name: "miles",
    placeholder: "10000",
  },
  {
    id: 4,
    title: "City *",
    name: "city",
    placeholder: "Miami",
  },
  {
    id: 5,
    title: "Number of Seats *",
    name: "seats",
    placeholder: "4",
  },
  {
    id: 6,
    title: "Features *",
    name: "features",
    placeholder: "Leather Interior, No Accidents",
  },
];
</script>

<template>
  <div>
    <div>
      <h1 class="text-6xl mt-24">Create a New Listing</h1>
    </div>
    <div class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
      <CarAdSelect
        title="Make *"
        name="make"
        :options="makes"
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
        @change-input="onChangeInput"
      />
      <CarAdImage @change-input="onChangeInput" />
      <button
        class="bg-blue-400 text-white px-5 py-2 mt-5 rounded cursor-pointer"
        :disabled="true"
      >
        Submit
      </button>
      <button @click="info.city = 'pussy'">sadasdas</button>
    </div>
  </div>
</template>