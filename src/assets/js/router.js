
import Router from 'vue-router'

import first from '../../components/first.vue'
import car from '../../components/car.vue'
import classification from '../../components/classification.vue'
import mine from '../../components/mine.vue'
import downlond from '../../components/downlond.vue'
import login from '../../components/login.vue'
import details from '../../components/details.vue'




export default new Router({
    routes:[
        {
            path:'/',
            component:first
        },
        {
         path:'/first',
         component:first
         },
         {
        path:'/car',
        component:car
        },
        {
        path:'/classification',
        component:classification
        },
        {
        path:'/mine',
        component:mine
        },
        {
            path:'/downlond',
            component:downlond
        },
        {
            path:'/login',
            component:login
        },
        {
            path:'/details',
            component:details
        }
        

    ]
})