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
                    editToggle: false, 
                }
                this.$emit("add-todo", newTodo);
                this.text = '';
            }
        }
    },
}
</script>

<style scoped>
form {
    align-items: center;
}

input {
    display: block;
    width: 98%;
    padding: 8px;
    font-size: 18px;
    border: 1px solid #333333;
    margin: 0 auto 10px;
    outline: none;
}

.btn {
    display: block;
}

/* =================== media queries ====================*/

@media (max-width: 1024px) {
input {
    width: 95%;
}

.btn {
    margin: 0 auto 20px;
}
}

@media (max-width: 768px) {
input {
    width: 90%;
    margin-bottom: 25px;
}

.btn {
    margin-bottom: 30px;
}
}
</style>