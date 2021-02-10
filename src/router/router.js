import VueRouter from 'vue-router'

import LoginPage from '../pages/LoginPage'
import TodoPage from '../pages/TodoPage'

export default new VueRouter({
    routes: [
        {
            path: '',
            component: LoginPage
        },
        {
            path: '/todo',
            component: TodoPage
        },
    ],
    mode: 'history'
})