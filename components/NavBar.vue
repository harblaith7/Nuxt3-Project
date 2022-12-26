<script setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();

const logout = async () => {
  // 1) make user.value = null
  // 2) Remove JWT from Cookie browser
  // const { error } = supabase.auth.signOut();

  const { error } = await supabase.auth.signOut();

  try {
    await $fetch("/api/_supabase/session", {
      method: "POST",
      body: { event: "SIGNED_OUT", session: null },
    });
  } catch (error) {
    return console.log(error);
  }

  user.value = null;
  navigateTo("/");
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
    <div v-if="user" class="flex">
      <NuxtLink to="/profile/listings" class="mr-5">Profile</NuxtLink>
      <p class="cursor-pointer" @click="logout">Logout</p>
    </div>
    <NuxtLink v-else to="/login">Login</NuxtLink>
  </header>
</template>