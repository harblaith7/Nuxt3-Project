<script setup>
definePageMeta({
  layout: "custom",
});
const supabase = useSupabaseClient();

const login = () => {
  const redirectTo = `${window.location.origin}/profile/listings`;
  const { error } = supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo,
    },
  });

  if (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="mt-10">
    <h1 class="text-5xl font-bold mb-7">Log in to Find your Car</h1>
    <button class="bg-red-400 p-3 rounded text-white font-bold" @click="login">
      Login with google
    </button>
  </div>
</template>