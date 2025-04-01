<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useTodoStore } from '../stores/todoStore';

const route = useRoute();
const router = useRouter();
const store = useTodoStore();

const id = Number(route.params.id);
const title = ref('');
const description = ref('');

onMounted(() => {
  const todo = store.todos.find(t => t.id === id);
  if (todo) {
    title.value = todo.title;
    description.value = todo.description;
  }
});

const updateTodo = () => {
  if (title.value && description.value) {
    store.updateTodo({ id, title: title.value, description: description.value });
    router.push('/');
  }
};
</script>

<template>
  <div>
    <h1>Edit Todo</h1>
    <input v-model="title" placeholder="Title" />
    <textarea v-model="description" placeholder="Description"></textarea>
    <button @click="updateTodo">Update</button>
    <button @click="$router.push('/')">Cancel</button>
  </div>
</template>
