<script setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();

const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    return;
  }
  try {
    await $fetch("/api/_supabase/session", {
      method: "POST",
      body: { event: "SIGNED_OUT", session: null },
    });
    user.value = null;
  } catch (e) {
    console.error(error);
  }
  await navigateTo("/");
};
</script>

<template>
  <header
    class="
      sticky
      top-0
      z-50
      flex
      justify-between
      items-center
      space-x-1
      border-b
      bg-white
      p-4
      shadow-md
    "
  >
    <NuxtLink class="text-3xl font-mono" to="/">cartrader</NuxtLink>
    <div>
      <NuxtLink v-if="!user" to="/login">Login</NuxtLink>
      <div v-else class="flex">
        <NuxtLink to="/profile/listings" class="mr-5">Profile</NuxtLink>
        <p @click="logout" class="cursor-pointer">Logout</p>
      </div>
    </div>
  </header>
</template>