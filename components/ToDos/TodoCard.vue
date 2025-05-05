<template>
  <div>
    <p>Description: {{ todo.todo }}</p>
    <p>Status: {{ todo.completed }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  todo: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
