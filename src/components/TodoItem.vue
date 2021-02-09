<template>
    <div>
        <li>{{todo.text}}</li>
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