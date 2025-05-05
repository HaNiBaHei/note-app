<template>
    <div class="container">
       <div v-for="todoList in todos?.todos" :key="todoList.id">
          <ToDosTodoCard :todo="todoList"/>
       </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { todoListRes } from "~/types/todo";
  
  const toast = useToast();
  const { user } = useAuth();
  const todos = ref<todoListRes | null>(null);
  
  try {
    if (user.value?.id) {
      const { data: data } = await useFetch<todoListRes>(
        () => `https://dummyjson.com/todos/user/${user.value?.id}`,
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
  }
  </script>
  
  <style lang="scss" scoped></style>
  