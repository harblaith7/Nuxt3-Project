<script setup lang="ts">
import {} from "#app";
const route = useRoute();

const props = defineProps<{
  description: string;
}>();
</script>


<template>
  <div class="mt-5">
    <p class="mb-10">
      {{ description }}
    </p>
  </div>
</template>