import { defineStore } from 'pinia';

interface Todo {
  id: number;
  title: string;
  description: string;
}

export const useTodoStore = defineStore('todoStore', {
  state: () => ({
    todos: [] as Todo[],
  }),
  actions: {
    addTodo(todo: Omit<Todo, 'id'>) {
      this.todos.push({ id: Date.now(), ...todo });
    },
    deleteTodo(id: number) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    updateTodo(updatedTodo: Todo) {
      const index = this.todos.findIndex(todo => todo.id === updatedTodo.id);
      if (index !== -1) {
        this.todos[index] = updatedTodo;
      }
    }
  }
});
