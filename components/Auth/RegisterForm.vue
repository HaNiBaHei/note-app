<template>
  <UForm
    :schema="registerSchema"
    :state="state"
    class="space-y-4"
    @submit="onSubmit"
  >
    <UFormField label="First name" name="firstName">
      <UInput v-model="state.firstName" class="w-full" />
    </UFormField>

    <UFormField label="Last name" name="lastName">
      <UInput v-model="state.lastName" class="w-full" />
    </UFormField>

    <UFormField label="Username" name="username">
      <UInput v-model="state.username" class="w-full" />
    </UFormField>

    <UFormField label="Password" name="password">
      <UInput v-model="state.password" type="password" class="w-full" />
    </UFormField>

    <UFormField label="Confirm password" name="confirmPassword">
      <UInput
        v-model="state.confirmPassword"
        type="password"
        class="w-full"
      />
    </UFormField>

    <UButton type="submit" class="w-full"> Submit </UButton>
  </UForm>
</template>

<script setup lang="ts">
import { registerSchema } from "@/utils/validation/authSchemas";
import type { FormSubmitEvent } from "@nuxt/ui";
import type { z } from "zod";

type RegisterSchema = z.infer<typeof registerSchema>;

const state = reactive<RegisterSchema>({
  firstName: '',
  lastName: '',
  username: '',
  password: '',
  confirmPassword: '',
});

const toast = useToast()

async function onSubmit(event: FormSubmitEvent<RegisterSchema>) {
  toast.add({
    title: "Success",
    description: "The form has been submitted.",
    color: "success",
  });
  console.log(event.data);
}
</script>

<style lang="scss" scoped></style>
