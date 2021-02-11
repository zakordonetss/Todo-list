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
        <hr>
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
              {id: 1, text: 'Todo 1', completed: false, isActiveTextarea: false, isActiveEdit: true},
              {id: 2, text: 'Todo 2', completed: false, isActiveTextarea: false, isActiveEdit: true},
              {id: 3, text: 'Todo 3', completed: false, isActiveTextarea: false, isActiveEdit: true},
          ],

          username: localStorage.getItem('username'),
      };
    },

    methods: {
        removeTodo(id) {
            const index = this.getIndexById(id);
            this.todos.splice(index, 1)
        },

        addTodo(newTodo) {
            this.todos.push(newTodo);
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
                return;
            } else {
                this.todos[index].text = localStorage.getItem('editText');
                localStorage.removeItem('editText');
                this.editActivate(index);
            }
        },

        logOut() {
            localStorage.removeItem("username");
            localStorage.removeItem("logedIn");
            this.$router.push('/');
        },

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
        }
    },

    created() {
        if (!localStorage.getItem('logedIn')) this.$router.push('/');
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