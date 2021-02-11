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

    .checkbox-other {
	display: block;
	margin: 0 0 10px 0;
	line-height: 22px;  
}

.checkbox-other input[type=checkbox] {
	-webkit-appearance: none;
	-moz-appearance: none;
	display: inline-block;
	width: 22px;
	height: 22px;
	margin: 0 5px 0 0;
	padding: 0;
	vertical-align: top;
	outline: none;
	transition: background 0.3s ease;
	background: url(https://snipp.ru/uploads/contents/checkbox-1.png) 0 0 no-repeat;
	cursor: pointer;
}
 
/* Checked */
.checkbox-other input[type=checkbox]:checked {
	background-image: url(https://snipp.ru/uploads/contents/checkbox-2.png);
}
 
/* Focus */
.focused input[type=checkbox] {
	box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
}
 
/* Hover */
.checkbox-other input[type=checkbox]:hover {
	filter: brightness(110%);
}
 
/* Active */
.checkbox-other input[type=checkbox]:active {
	filter: brightness(80%);
}
</style>