<script setup>
const props = defineProps({
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
  <div class="flex flex-col w-[100%] mt-2">
    <label for="description" class="text-cyan-500 mb-1 text-sm"
      >{{ title }}
    </label>
    <textarea
      class="p-2 border w-100 rounded"
      :name="name"
      id=""
      cols="10"
      rows="2"
      v-model="state"
      @input="onChange"
    ></textarea>
  </div>
</template>