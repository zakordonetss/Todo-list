<template>
    <div>
        <li>
            <div class="container">
                <div class="text" :class="{done:todo.completed}">
                    <label class='checkbox-other' for="">
                        <input 
                            type="checkbox" 
                            @change="todo.completed = !todo.completed"
                        >
                    </label>
                        
                    {{todo.text}}
                </div>

                <div class="container-btn">
                    <button
                        :class="{ activeBtn:todo.isActiveEdit }" 
                        class="btn btn-edit"
                        @click="onEdit(todo.id, todo.text)"
                    >Edit</button>
                    <button 
                        class="btn btn-delete"
                        @click="$emit('remove-todo', todo.id)"
                    >Delete</button>
                </div>
            </div>
            <textarea 
                class="hidden-textarea" 
                :class="{ activeText:todo.isActiveTextarea }" 
                v-model="actualText"
                @keyup.enter="onEnter(todo.id)"
            />
        </li>
    </div>
</template>

<script>

export default {
    props: {
        todo: {
            type: Object,
            required: true,
        },
    },

    data() {
        return {
            actualText: '',
        }
    },

    methods: {
        onEdit(id, text) {
            this.actualText = text;
            this.isActive = !this.isActive;
            this.$emit('edit-todo', id);
        },

        onEnter(id) {
            localStorage.setItem('editText', this.actualText)
            this.$emit('enter-todo', id)
        }
    },
}

</script>

<style scoped>
    li {
        text-align: left;
        align-items: center;
        padding: 5px 20px;
        margin-bottom: 10px;
        font-size: 20px;
        background-color: rgb(247, 247, 247);
    }

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    input {
        margin-right: 15px;
    }

    .hidden-textarea {
        display: none;
        width: 80%;
        padding: 8px;
        font-size: 18px;
        border: 1px solid #333333;
        margin: 10px;
        outline: none;
    }

    .container-btn {
        align-items: center;
        text-align: center;
    }

    .btn-delete {
        background-color:darkred;
        color: white;
        cursor: pointer;
        border-color: darkred;
        height: 32px;
        margin: 5px;
    }

    .btn-delete:hover {
        background-color:white;
        color: darkred;
    }

    .btn-edit {
        display: none;
        background-color: rgb(0, 83, 161);
        color: white;
        cursor: pointer;
        border-color: rgb(0, 83, 161);
        height: 32px;
        margin: 5px;
    }

    .btn-edit:hover {
        background-color:white;
        color: rgb(0, 83, 161);
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
        line-height: 22px;  
        margin-right: 20px;
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

    .checkbox-other input[type=checkbox]:checked {
        background-image: url(https://snipp.ru/uploads/contents/checkbox-2.png);
    }

    .focused input[type=checkbox] {
        box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
    }
    
    .checkbox-other input[type=checkbox]:hover {
        filter: brightness(110%);
    }
    .checkbox-other input[type=checkbox]:active {
        filter: brightness(80%);
    }

    .activeText {
        display: block;
    }

    .activeBtn {
        display: inline-block;
    }
    
</style>