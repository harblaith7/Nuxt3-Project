<script setup>
const route = useRoute();

const contactData = reactive({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const handleSubmit = async () => {
  const { error, data } = await $fetch(
    `/api/car/listings/${route.params.id}/message`,
    {
      method: "post",
      body: contactData,
    }
  );

  console.log({ error, data });
};
</script>

<template>
  <div class="mt-10">
    <div class="flex w-[600px] justify-between">
      <input
        type="text"
        class="border p-1"
        placeholder="Name"
        v-model="contactData.name"
      />
      <input
        type="text"
        class="border p-1"
        placeholder="Email"
        v-model="contactData.email"
      />
      <input
        type="text"
        class="border p-1"
        placeholder="Phone"
        v-model="contactData.phone"
      />
    </div>
    <div class="flex mt-4 w-[600px]">
      <textarea
        class="border p-1 w-full"
        placeholder="Message"
        v-model="contactData.message"
      ></textarea>
    </div>
    <button
      class="bg-blue-400 text-white px-10 py-3 rounded mt-4"
      @click="handleSubmit"
    >
      Submit
    </button>
  </div>
</template>