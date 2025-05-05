<template>
  <div class="flex flex-row justify-between mt-4 sm:mx-5 px-2 sm:px-0" >
    <UInput placeholder="Search" icon="i-lucide-search" class="min-w-4xs"/>
    <CreateTodoModal/>
  </div>
  <div class="container grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 sm:mx-5 px-2 sm:px-0">
    <div v-for="todoList in todos?.todos" :key="todoList.id" class="">
      <ToDosTodoCard :todo="todoList" :isLoading="isLoading"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import CreateTodoModal from "~/components/ToDos/CreateTodoModal.vue";
import type { todoListRes } from "~/types/todo";

const toast = useToast();
const { user } = useAuth();
const todos = ref<todoListRes | null>(null);
const isLoading = useState('isLoading', () => false);

try {
  isLoading.value = true;
  if (user.value?.id) {
    const { data: data } = await useFetch<todoListRes>(
      () => `https://dummyjson.com/todos/user/${user.value?.id}`
    );
    todos.value = data.value;
    console.log(todos.value);
  }
} catch (error) {
  if (error && typeof error === "object" && "response" in error) {
    const err = error as { response?: { _data?: { message?: string } } };
    toast.add({
      title: "Query Todos",
      description: err.response?._data?.message || "Unknow Error",
      color: "error",
    });
  }
} finally {
  isLoading.value = false;
}
</script>

<style lang="scss" scoped></style>
