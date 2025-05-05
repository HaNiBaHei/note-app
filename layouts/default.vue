<template>
  <div class="flex flex-col min-h-screen">
    <HeaderNav/>
    <main class="flex-1">
      <slot />
    </main>
    <footer class="py-2 text-center bg-black">ge</footer>
  </div>
</template>

<script setup lang="ts">
import HeaderNav from '~/components/Header/HeaderNav.vue';




</script>

<style lang="scss" scoped></style>
