import {GO} from "../const/go"
import Vue from 'vue'
import VueRouter from 'vue-router'

const NotFound = () => import(/* webpackChunkName: "NotFound" */ '../vue/dialog/NotFound')
const Events = () => import(/* webpackChunkName: "Events" */ '../vue/events/Events')
const CreateEvent = () => import(/* webpackChunkName: "Events" */ '../vue/events/CreateEvent')
const Confirmation = () => import(/* webpackChunkName: "Confirmation" */ '../vue/user/Confirmation')
const Inscription = () => import(/* webpackChunkName: "Inscription" */ '../vue/user/Inscription')
const Login = () => import(/* webpackChunkName: "Login" */ '../vue/user/Login')

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: "/",
    routes: [
        {name: GO.EVENTS, path: "/", component: Events},
        {name: GO.CREATE_EVENT, path: "/create/event", component: CreateEvent},
        {name: GO.LOGIN, path: "/login", component: Login},
        {name: GO.SUSCRIBE, path: "/suscribe", component: Inscription},
        {name: GO.CONFIRM, path: "/confirm/:token", component: Confirmation, props: true},
        {name: GO.NOT_FOUND, path: '/404', component: NotFound},
        {path: '*', redirect: '/404'},
    ]
})