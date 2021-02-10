<template>
    <div>
        <form action="">
            <li>{{todo.text}}</li> 
            <button>Delete</button>
        </form>
    </div>
</template>

<script>

export default {
    props: {
        todo: {
            type: Object,
            required: true,
        }
    }
}

</script>