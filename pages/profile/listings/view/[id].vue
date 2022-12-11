
<script setup>
definePageMeta({
  layout: "custom",
  middleware: "auth",
});
</script>

<template>
  <div class="rounded shadow mt-20">
    <div class="even:bg-gray-100 p-4">
      <h1 class="font-bold text-2xl">Laith Harb</h1>
      <p class="text-gray-700">
        I really like this car and I would love to schedule a viewing. I am free
        on the weekend. I can stop by then if you'd like. If that is not
        possible, then I can come in Wednesday night. Before I come however,
        does this car have an history of accidents. I don't want a car like
        that!
      </p>
      <div class="flex items-center mt-4">
        <p class="text-green-700 mr-10">laith@email.com</p>
        <p class="text-blue-500">555-555-5555</p>
      </div>
    </div>
    <div class="even:bg-gray-100 p-4">
      <h1 class="font-bold text-2xl">Edward Brady</h1>
      <p class="text-gray-700">
        This car is really not that nice. You should not post a car like that it
        is bad ans a disgrace to all the automobile indistry
      </p>
      <div class="flex items-center mt-4">
        <p class="text-green-700 mr-10">ed@email.com</p>
        <p class="text-blue-500">987-457-1253</p>
      </div>
    </div>
  </div>
</template>