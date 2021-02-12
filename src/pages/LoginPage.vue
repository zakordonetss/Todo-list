<template>
    <div>
        <header class="bar">
          <strong class="logo">Todo Application</strong>
        </header>
        <h3>Login form</h3>
        <p>You're not registered. Please enter your details! </p>
        <form @submit.prevent="logIn">
            <div class="wrapper">
                <input 
                    type="Text" 
                    placeholder="Username..." 
                    v-model="username"
                    :class="{invalid: ($v.username.$dirty && !$v.username.required)}"
                >
                <small
                    class='error-message'
                    v-if="$v.username.$dirty && !$v.username.required"
                >This field cannot be empty</small>
            </div>

            <div class="wrapper">
                <input 
                    type="password" 
                    placeholder="Password..." 
                    v-model="password"
                    :class="{invalid: ($v.password.$dirty && !$v.password.required) || 
                    ($v.password.$dirty && !$v.password.minLength)}"
                >
                <small
                    class='error-message'
                    v-if="$v.password.$dirty && !$v.password.required"
                >Please enter your password</small>
                <small
                    class='error-message'
                    v-else-if="$v.password.$dirty && !$v.password.minLength"
                >Password must be more than 6 characters</small>
            </div>

            <br>
            <button 
                class="btn btn-submit"
                type="submit"
            >Log In</button>
        </form>
    </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

export default {
    data() {
        return {
            username: '',
            password: '',
            isValid: false
        }
    },

    validations: {
        username: { required },
        password: { required, minLength: minLength(6) }
    },

    methods: {
        logIn() {
            if (this.$v.$invalid) {
                this.$v.$touch();
                return
            }
            localStorage.setItem('username', this.username);
            localStorage.setItem('loggedIn', true);
            this.$router.push('/todo');
        }
    },

    created() {
        if (localStorage.getItem('loggedIn')) this.$router.push('/todo');
    },
}
</script>

<style scoped>
input {
    display: block;
    width: 100%;
    padding: 5px;
    font-size: 14px;
    border: 1px solid #333333;
    margin: 30px auto 0;
    outline: none;
}

.wrapper {
    display: block;
    margin: 0 auto;
    max-width: 300px;
    position: relative;
}

.error-message {
    position: absolute;
    left: 6px;
    bottom: -18px;
    font-size: 12px;
    color: rgb(201, 0, 0);
    text-align: start;
}

.invalid {
    border-color: rgb(201, 0, 0);
}

.invalid::placeholder {
    color: rgb(201, 0, 0);
}

/* =================== media queries ====================*/

@media (max-width: 1024px) {
}

@media (max-width: 768px) {
}

@media (max-width: 480px) {

}
</style>