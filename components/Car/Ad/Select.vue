<script setup>
const props = defineProps({
  options: Array,
  title: String,
  name: String,
});

const emits = defineEmits(["changeInput"]);

const state = ref("");

const onChange = () => {
  emits("changeInput", state.value, props.name);
};
</script>

<template>
  <div class="flex flex-col w-[48%] mt-2">
    <label :for="name" class="text-cyan-500 mb-1 text-sm">{{ title }}</label>
    <select
      :name="name"
      id=""
      class="p-2 border w-100 rounded"
      @change="onChange"
      v-model="state"
    >
      <option v-for="option in options" :value="option" :key="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>