<script setup lang="ts">
const make = ref("any");
</script>

<template>
  <div class="border-b-2 p-4 md:px-6 flex text-lg font-bold items-center">
    <div class="border-b flex items-center h-10 mr-5">
      <p>Where:</p>
      <input type="text" class="h-full focus:outline-none px-3 font-normal" />
    </div>
    <input
      type="text"
      placeholder="Start Date"
      onfocus="(this.type = 'date')"
      onfocusout="(this.type = 'text')"
      class="
        focus:outline-none
        border
        py-1
        px-4
        placeholder-black placeholder:font-bold
        mr-4
        w-48
      "
    />
    <p class="mr-4">to</p>
    <input
      type="text"
      placeholder="End Date"
      onfocus="(this.type = 'date')"
      onfocusout="(this.type = 'text')"
      class="
        focus:outline-none
        border
        py-1
        px-4
        placeholder-black placeholder:font-bold
        mr-4
        w-48
      "
    />
    <div class="h-10 font-bold text-lg flex items-center ml-5">
      <select
        v-model="make"
        class="h-10 font-bold border py-1 px-4 mr-3 rounded text-lg"
      >
        <option value="any">Make</option>
      </select>
    </div>
  </div>
</template>