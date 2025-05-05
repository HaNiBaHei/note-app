<template>
  <UApp>
    <UCard>
        <p class="mb-2">Description: {{ todo.todo }}</p>
        <UBadge
          :icon="todo.completed ? 'i-lucide-check' : 'i-lucide-loader'"
          :label="todo.completed ? 'Done' : 'Doing'"
          :color="todo.completed ? 'success' : 'warning'"
        />
    </UCard>
  </UApp>
</template>

<script setup lang="ts">
defineProps({
  todo: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
