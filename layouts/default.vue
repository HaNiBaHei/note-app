<template>
  <div class="flex flex-col min-h-screen">
    <header class="flex flex-row mx-10 justify-between py-4 shadow-lg">
      <h1 class="font-bold">Note App</h1>
      <nav class="flex flex-row gap-4">
        <ULink as="button" to="/">Index</ULink>
        <ULink as="button" to="/about">About</ULink>
        <ULink as="button" to="/auth/">Login/Register</ULink>
      </nav>
    </header>
    <main class="flex-1">
      <slot />
    </main>
    <footer class="py-2 text-center bg-black">ge</footer>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>
