<script setup lang="ts">
definePageMeta({
  layout: "error",
});

const error = useError();

const handleError = () => {
  clearError({
    redirect: "/",
  });
};
</script>

<template>
  <div>
    <NuxtLayout>
      <div class="text-center mx-auto mt-32">
        <h1 class="text-9xl text-red-600">{{ error.statusCode }}</h1>
        <p class="mt-7 text-4xl">{{ error.message }}</p>
        <button
          @click="handleError"
          class="rounded mt-7 text-2xl bg-blue-400 px-7 py-4 text-white"
        >
          Go Back
        </button>
      </div>
    </NuxtLayout>
  </div>
</template>