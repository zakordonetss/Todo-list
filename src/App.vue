<template>
  <div id="app">
      <h1>Todo application</h1>
      <router-view 
        :todos ='todos'
      />
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
      return {
          todos: [
              {id: 1, text: 'Todo 1', completed: false},
              {id: 2, text: 'Todo 2', completed: false},
              {id: 3, text: 'Todo 3', completed: false},
          ]
      };
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
