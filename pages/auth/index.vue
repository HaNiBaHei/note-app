<template>
  <UApp>
    <div class="min-h-screen flex items-center justify-center">
      <UContainer class="w-full max-w-xl">
        <UCard>
          <UTabs :items="items">
            <template #login="{ item }">
              <div class="">
                <p>This is the {{ item.label }} tab.</p>
                <LoginForm />
              </div>
            </template>
            <template #register="{ item }" class="w-full">
              <p>This is the {{ item.label }} tab.</p>
							<RegisterForm/>
            </template>
          </UTabs>
        </UCard>
      </UContainer>
    </div>
  </UApp>
</template>

<script setup lang="ts">
import type { TabsItem } from "@nuxt/ui";
import LoginForm from "~/components/Auth/LoginForm.vue";
import RegisterForm from "~/components/Auth/RegisterForm.vue";

definePageMeta({
  layout: "auth",
});

const items: TabsItem[] = [
  {
    label: "Login",
    icon: "i-lucide-user",
    slot: "login" as const,
  },
  {
    label: "Register",
    icon: "i-lucide-book-user",
    slot: "register" as const,
  },
];
</script>

<style lang="scss" scoped></style>
