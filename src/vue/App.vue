<template>
    <v-app id="app" light>
        <v-content>
            <left-menu v-if="nav.leftMenuVisible"></left-menu>
            <transition name="slide-fade" mode="out-in">
                <router-view></router-view>
            </transition>
            <LeftMenuOpener/>
            <connect-to-continue-dialog v-if="dialogs[Dial.CONNECT_TO_CONTINUE].visible"></connect-to-continue-dialog>
            <snack :snack="snack" v-if="snack.visible"></snack>
            <logged-in class="top-right"/>
        </v-content>
    </v-app>
</template>

<script>
    import {Dial} from "../const/dial"
    import {mapState} from "vuex"
    import On from "../const/on"
    import LoggedIn from "./user/LoggedIn"
    import Snack from "./dialog/Snack"
    import LeftMenuOpener from "./LeftMenuOpener"

    const ConnectToContinueDialog = () => import(/* webpackChunkName: "ConnectToContinueDialog"*/ "./dialog/ConnectToContinueDialog")
    const LeftMenu = () => import(/* webpackChunkName: "LeftMenu" */ "./LeftMenu")

    export default {
        data: () => ({Dial}),
        components: {
            LeftMenuOpener,
            LeftMenu,
            ConnectToContinueDialog,
            Snack,
            LoggedIn
        },
        computed: {
            ...mapState(["dialogs", "snack", "nav"])
        },
        mounted: async function () {
            await this.$store.dispatch(On.MOUNT_APP)
        }
    }
</script>