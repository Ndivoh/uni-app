import {createRouter, createWebHistory} from 'vue-router'

import LandingPage from "./../components/LandingPage.vue"
import AboutUs from "./../components/aboutUs.vue"
import SignUp from "./../components/SignUp.vue"
import LogIn from "./../components/LogIn.vue"






const routes = [
    {
      path: '/',
      name: 'landingpage',
      component: LandingPage,
    },
    {
        path: '/aboutUs',
        name: 'aboutUs',
        component: AboutUs,
      },
      {
        path: '/signup',
        name: 'signup',
        component: SignUp,
      },
      {
        path: '/login',
        name: 'login',
        component: LogIn,
      }
      
        
]
const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router