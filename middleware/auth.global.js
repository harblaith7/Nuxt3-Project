export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path.includes("profile")) {
    const user = useSupabaseUser();
    if (user.value) {
      return;
    }
    return navigateTo("/login");
  }
});
