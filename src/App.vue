<template>
  <div id="app">
    <h1>Todo List</h1>
      <TodoList 
        :todos = 'todos'
      />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList"

export default {
  name: 'App',
  data() {
      return {
          todos: [
              {id: 1, text: 'Todo 1', completed: false},
              {id: 2, text: 'Todo 2', completed: false},
              {id: 3, text: 'Todo 3', completed: false},
          ]
      }
  },
  components: {
      TodoList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
