<template>
  <div class="flex flex-col min-h-screen">
    <header class="py-4 shadow-lg">
      <div class="flex flex-row justify-between mx-5">
        <h1 class="font-bold">Note App</h1>
        <nav class="flex flex-row gap-4">
          <ULink as="button" to="/">Index</ULink>
          <ULink as="button" to="/about">About</ULink>
          <!-- <ULink as="button" to="/auth/">Login/Register</ULink> -->
          <UButton icon="i-lucide-log-out" label="logout" @click="logout" />
        </nav>
      </div>
    </header>
    <main class="flex-1">
      <slot />
    </main>
    <footer class="py-2 text-center bg-black">ge</footer>
  </div>
</template>

<script setup>
const auth = useAuth();

async function logout() {
  await auth.logout();
}
</script>

<style lang="scss" scoped></style>
