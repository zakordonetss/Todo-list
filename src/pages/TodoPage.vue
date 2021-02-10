<template>
    <div>
        <header class="bar">
          <strong>Todo Application</strong>
          <button 
            class="btn-bar"
            @click="logOut"
          ><strong>Log Out</strong></button>
        </header>
        <h2>Task list by {{ username }} </h2>

        <CreateTodo
            @add-todo="addTodo"
         />
        <h2>Todos List</h2>
        <ul>
            <TodoItem 
                v-for="todo of todos"
                :key="todo.id"
                :todo="todo"
                @remove-todo="removeTodo"
            />
        </ul>
    </div>
</template>

<script>
import TodoItem from "@/components/TodoItem"
import CreateTodo from "@/components/CreateTodo"

export default {
    components: {
        TodoItem,
        CreateTodo
    },

    data() {
      return {
          todos: [
              {id: 1, text: 'Todo 1', completed: false},
              {id: 2, text: 'Todo 2', completed: false},
              {id: 3, text: 'Todo 3', completed: false},
          ],

          username: localStorage.getItem('username'),
      };
    },

    methods: {
        removeTodo(id) {
            this.todos = this.todos.filter(todo => todo.id != id)
        },

        addTodo(newTodo) {
            this.todos.push(newTodo)
        },

        logOut() {
            localStorage.removeItem("username");
            localStorage.removeItem("logedIn")
            this.$router.push('/')
        },
    },

    created() {
        localStorage.getItem('logedIn') ? this.$router.push('/todo') : this.$router.push('/');
    },
}
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    };
</style>