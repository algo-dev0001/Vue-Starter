<script setup lang="ts">
import { ref } from 'vue';
import { useTodoStore } from '../stores/todoStore';
import { useRouter } from 'vue-router';

const store = useTodoStore();
const router = useRouter();

const title = ref('');
const description = ref('');

const addTodo = () => {
  if (title.value && description.value) {
    store.addTodo({ title: title.value, description: description.value });
    router.push('/');
  }
};
</script>

<template>
  <div>
    <h1>Create Todo</h1>
    <input v-model="title" placeholder="Title" />
    <textarea v-model="description" placeholder="Description"></textarea>
    <button @click="addTodo">Add</button>
    <button @click="$router.push('/')">Cancel</button>
  </div>
</template>
