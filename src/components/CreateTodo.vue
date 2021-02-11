<template>
    <form @submit.prevent="onAdd" >
        <input type="text" v-model="text" placeholder="Your note...">
        <button class="btn">Add todo</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            text: ''
        }
    },
    methods: {
        onAdd() {
            if (this.text.trim()) {
                const newTodo = {
                    id: Date.now(),
                    text: this.text,
                    completed: false,
                    isActiveTextarea: false, 
                    isActiveEdit: true,
                }
                this.$emit("add-todo", newTodo);
                this.text = '';
            }
        }
    },
}
</script>

<style scoped>
    input {
        display: block;
        width: 98%;
        padding: 8px;
        font-size: 18px;
        border: 1px solid #333333;
        margin-bottom: 1rem;
        outline: none;
    }
    
    .btn {
        display: block;
    }
</style>