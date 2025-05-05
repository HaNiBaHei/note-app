<template>
  <UAlert
    v-if="showAlert"
    :title="'Error: ' + alertMsg"
    class="my-2"
    color="error"
  />
  <UForm
    :schema="loginSchema"
    :state="state"
    class="space-y-4"
    @submit="onSubmit"
  >
    <UFormField label="Username" name="username">
      <UInput v-model="state.username" class="w-full" />
    </UFormField>

    <UFormField label="Password" name="password">
      <UInput v-model="state.password" type="password" class="w-full" />
    </UFormField>

    <UButton
      type="submit"
      class="w-full text-center"
      label="Submit"
      loading-auto
    />
  </UForm>
</template>

<script setup lang="ts">
const showAlert = useState("showAlert", () => false);
const alertMsg = useState("alertMsg", () => "")
import { loginSchema } from "@/utils/validation/authSchemas";
import type { FormSubmitEvent } from "@nuxt/ui";
import type { z } from "zod";

type LoginSchema = z.infer<typeof loginSchema>;

const state = reactive<LoginSchema>({
  username: '',
  password: '',
});

const toast = useToast();

function triggerAlert() {
  const threeSec = 3000;
  showAlert.value = true;
  
  setTimeout(() => {
    showAlert.value = false;
  }, threeSec);
}

async function onSubmit(event: FormSubmitEvent<LoginSchema>) {
  const auth = useAuth()
  try {
    const payload = event.data
    const res = await $fetch('https://dummyjson.com/user/login', {
      method: 'POST',
      body: payload,
    })
    auth.login(res, res.accessToken)
    console.log(res);
    await navigateTo('/');
  } catch (error) {
    alertMsg.value = error.response?._data.message
    triggerAlert()
    console.log(error.response?._data.message)
  }
}
</script>
