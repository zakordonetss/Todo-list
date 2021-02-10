<template>
    <div>
        <li>
            <div class="text" :class="{done:todo.completed}">
                <input 
                type="checkbox" 
                @change="todo.completed = !todo.completed"
                >
                {{todo.text}}
            </div>

            <button 
                class="btn btn_delete"
                @click="$emit('remove-todo', todo.id)"
                >Delete</button>
        </li>
    </div>
</template>

<script>

export default {
    props: {
        todo: {
            type: Object,
            required: true,
        }
    },
    methods: {
    },
}

</script>

<style scoped>
    li {
        display: flex;
        justify-content: space-between;
        text-align: left;
        align-items: center;
        padding: 5px 20px;
        margin-bottom: 10px;
        font-size: 20px;
        background-color: rgb(247, 247, 247);
    }

    input {
        margin-right: 15px;
    }

    .btn_delete {
        background-color:darkred;
        color: white;
        cursor: pointer;
        border-color: darkred;
        height: 32px;
    }

    .btn_delete:hover {
        background-color:white;
        color: darkred;
    }

    .done {
        text-decoration: line-through;
    }

    .text {
        display: flex;
        align-items: center;
    }
</style>