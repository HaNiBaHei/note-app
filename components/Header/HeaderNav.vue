<template>
    <header class="py-4 shadow-lg">
      <div class="flex flex-row justify-between mx-5">
        <h1 class="font-bold">Note App</h1>
        <nav class="flex flex-row gap-4">
          <ULink as="button" to="/">Index</ULink>
          <ULink as="button" to="/about">About</ULink>
          <ULink as="button" to="/todos">Todo</ULink>
          <!-- <ULink as="button" to="/auth/">Login/Register</ULink> -->
          <UButton icon="i-lucide-log-out" label="logout" @click="logout" />
        </nav>
      </div>
    </header>
</template>

<script setup lang="ts">
const auth = useAuth();

async function logout() {
  await auth.logout();
}
</script>

<style lang="scss" scoped>

</style>