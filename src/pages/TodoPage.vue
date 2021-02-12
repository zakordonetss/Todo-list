<template>
    <div>
        <header class="bar">
          <strong class="logo">Todo Application</strong>
          <button 
            class="btn-bar"
            @click="logOut"
          ><strong>Log Out</strong></button>
        </header>
        <h3>User: {{ username }} </h3>

        <CreateTodo
            @add-todo="addTodo"
         />
        <h3>Todos List</h3>
        <h5 v-if="todos.length == 0">There are no notes yet. Please add the first one!</h5>
        <ul>
            <TodoItem 
                v-for="todo of todos"
                :key="todo.id"
                :todo="todo"
                @remove-todo="removeTodo"
                @edit-todo="editTodo"
                @enter-todo="onEnter"
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
            //   {id: 1, text: 'Todo 1', completed: false, isActiveTextarea: false, isActiveEdit: true},
            //   {id: 2, text: 'Todo 2', completed: false, isActiveTextarea: false, isActiveEdit: true},
            //   {id: 3, text: 'Todo 3', completed: false, isActiveTextarea: false, isActiveEdit: true},
          ],

          username: localStorage.getItem('username'),
      };
    },

    methods: {
        removeTodo(id) {
            const index = this.getIndexById(id);
            this.todos.splice(index, 1);
            this.setLocalTodos();
        },

        addTodo(newTodo) {
            this.todos.push(newTodo);
            this.setLocalTodos();
        },

        editTodo(id) {
            const index = this.getIndexById(id);
            this.textareaActivate(index);
            localStorage.setItem('editText', this.todos[index].text);
        },

        onEnter(id) {
            const index = this.getIndexById(id);
            if (!localStorage.getItem('editText').trim()) {
                this.removeTodo(id);
                this.setLocalTodos();
                return;
            } else {
                this.todos[index].text = localStorage.getItem('editText');
                localStorage.removeItem('editText');
                this.editActivate(index);
            }

            this.setLocalTodos();
        },

        logOut() {
            localStorage.removeItem("username");
            localStorage.removeItem("logedIn");
            this.$router.push('/login');
        },

        // Helper methods ===========================

        textareaActivate(i) {
            this.todos[i].isActiveTextarea = !this.todos[i].isActiveTextarea;
            this.todos[i].isActiveEdit = !this.todos[i].isActiveEdit;
        },

        editActivate(i) {
            this.todos[i].isActiveTextarea = !this.todos[i].isActiveTextarea;
            this.todos[i].isActiveEdit = !this.todos[i].isActiveEdit;
        },

        getIndexById(id) {
            return this.todos.findIndex(todo => todo.id === id);
        },

        // Methods for LocalStorage ====================

        setLocalTodos() {
            const todosJSON = JSON.stringify(this.todos);
            localStorage.setItem('todos', todosJSON);
        },

        getLocalTodos() {
            this.todos = JSON.parse(localStorage.getItem("todos"))
        },
    },

    created() {
        if (!localStorage.getItem('logedIn')) this.$router.push('/login');

        if (localStorage.getItem('todos')) {
            this.getLocalTodos()
        }
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