<template>
  <UModal title="Modal with close button" close-icon="i-lucide-arrow-right">
    <UButton label="Create Todo" color="neutral" variant="subtle" />

    <template #body>
      <UForm
        :schema="todoSchema"
        :state="state"
        class="space-y-4"
      >
        <UFormField label="Description" name="description">
          <UInput v-model="state.description" class="w-full"/>
        </UFormField>

        <!-- <UFormField label="Status" name="status">
          <UInput type="" v-model="state.status" class="w-full"/>
        </UFormField> -->
      </UForm>
    </template>
  </UModal>
</template>

<script setup lang="ts">
import { z } from "zod";
import { todoSchema } from '~/utils/validation/todoSchemas';

type TodoShema = z.infer<typeof todoSchema>;

const state = reactive<TodoShema>({
  description: '',
  status: false,
})
</script>

<style lang="scss" scoped></style>
