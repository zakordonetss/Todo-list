<template>
    <div>
        <header class="bar">
          <strong>Todo Application</strong>
        </header>
        <h2>Login</h2>
        <p>You're not registered. Please enter your details! </p>
        <form @submit.prevent="logIn">
            <input type="Text" placeholder="Username..." v-model="username">
            <input type="password" placeholder="Password...">
            <button 
                class="btn"
                type="submit"
            >Log In</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: ''
        }
    },
    methods: {
        logIn() {
            localStorage.setItem('username', this.username);
            localStorage.setItem('logedIn', true);
            this.$router.push('/todo');
        }
    },
}
</script>

<style scoped>
    input {
        display: block;
        width: 50%;
        padding: 5px;
        font-size: 14px;
        border: 1px solid #333333;
        margin: 25px auto;
        outline: none;
    }
</style>