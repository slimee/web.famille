<template>
    <v-layout class="top-left">
        <v-avatar class="ma-2" size="36px" @click="nav.leftMenuVisible = !nav.leftMenuVisible">
            <v-btn flat icon>
                <v-icon>menu</v-icon>
            </v-btn>
        </v-avatar>
    </v-layout>
</template>
<script>
    import {mapState} from "vuex"

    export default {
        name: 'LeftMenuOpener',
        computed: {
            ...mapState(["nav"])
        }
    }
</script>