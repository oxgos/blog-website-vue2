import Vue from 'vue'
import Router from 'vue-router'
import acticle from '@/components/acticle/acticle'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'acticle',
        component: acticle
    }]
})