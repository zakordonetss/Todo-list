<template>
    <div>
        <li>
            <div class="container">
                <div class="text" :class="{done:todo.completed}">
                    <label class='checkbox-other' for="check">
                        <input 
                            id="check"
                            type="checkbox" 
                            @change="todo.completed = !todo.completed"
                        >
                    </label>
                    {{todo.text}}            
                </div>

                <div class="container-btn">
                    <button
                        class="btn btn-edit"
                        @click="onEdit(todo.id, todo.text, todo.isActiveEdit)"
                    >{{ textButton }}</button>
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
            textButton: 'Edit',
        }
    },

    methods: {
        onEdit(id, text, isActiveEdit) {
            if (isActiveEdit) {
                this.actualText = text;
                this.isActive = !this.isActive;
                this.$emit('edit-todo', id, text);
                this.textButton = 'Post';
            } else {
                localStorage.setItem('editText', this.actualText)
                this.$emit('enter-todo', id, text);
                this.textButton = 'Edit';
            }
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
    box-shadow: 2px 3px 7px 0 rgba(0,0,0,0.2);
    border: 1px solid rgba(0, 0, 0, 0.05);
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
    width: 70%;
    padding: 8px;
    font-size: 17px;
    margin: 10px 10px 10px 45px;
    outline: none;
    resize:none;
    box-shadow: 2px 3px 5px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.15);
}

.container-btn {
    display: flex;
    align-items: center;
    text-align: right;
}

.btn-delete {
    background-color:rgba(179, 49, 49);
    color: white;
    cursor: pointer;
    border-color: rgb(179, 49, 49);
    height: 32px;
    width: 92px;
    margin: 5px;
}

.btn-delete:hover {
    background-color:white;
    color: rgb(179, 49, 49);
}

.btn-edit {
    display: inline-block;
    background-color: #008F68;
    color: white;
    cursor: pointer;
    border-color: #008F68;
    height: 32px;
    width: 92px;
    margin: 5px;
}

.btn-edit:hover {
    background-color:white;
    color: #008F68;;
}

.done {
    text-decoration: line-through;
}

.text {
    display: flex;
    text-align: left;
    align-items: center;
    padding-right: 10px;
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

/* =================== media queries ====================*/
@media (max-width: 1024px) {
li {
    
    padding: 15px;
    margin: 0 auto 10px;
    width: 90%;
}

.hidden-textarea {
    width: 60%;
}
}


@media (max-width: 768px) {
li {
    font-size: 16px;
    padding: 15px;
    width: 85%;
}

.container {
    flex-direction: column;
}

input {
    margin-right: 15px;
}

.hidden-textarea {
    font-size: 14px;
}

.text {
    width: 90%;
    margin-bottom: 15px;
}

.hidden-textarea {
    margin: 0 auto;
    margin-top: 10px;
    width: 70%;
}

}
    
</style>