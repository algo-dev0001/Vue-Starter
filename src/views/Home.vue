<script setup lang="ts">
import { useTodoStore } from '../stores/todoStore';
import { useRouter } from 'vue-router';

const store = useTodoStore();
const router = useRouter();

const deleteTodo = (id: number) => {
  store.deleteTodo(id);
};

const editTodo = (id: number) => {
  router.push(`/edit/${id}`);
};
</script>

<template>
  <div>
    <h1>Todo List</h1>
    <button @click="$router.push('/create')">Add New</button>
    <ul>
      <li v-for="todo in store.todos" :key="todo.id">
        <h3>{{ todo.title }}</h3>
        <p>{{ todo.description }}</p>
        <button @click="editTodo(todo.id)">Edit</button>
        <button @click="deleteTodo(todo.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>
