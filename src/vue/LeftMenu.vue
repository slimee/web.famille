<template>
    <v-navigation-drawer temporary fixed v-model="nav.leftMenuVisible">

        <v-list dense>

            <v-list-group>
                <template slot="activator">
                    <v-list-tile>
                        <v-list-tile-avatar>
                            <v-icon color="primary">add_box</v-icon>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>Créer...</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
                <v-list-tile @click="goto(GO.CREATE_EVENT)">
                    <v-list-tile-avatar>
                        <icon iconClass="add-event logo"/>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>Evènement</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list-group>

        </v-list>

        <v-list style="position:absolute;bottom:0.2em;width:100%" dense>
            <v-layout ml-2 mb-2 row align-end>
                <v-list-tile-action>
                    <icon iconClass="family logo-very-big"/>
                </v-list-tile-action>
                <p class="ml-3">Family v{{version.web}}</p>
            </v-layout>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import {mapActions, mapState, mapGetters, mapMutations} from "vuex"
    import {Dial} from "../const/dial"
    import On from "../const/on"
    import {GO} from "../const/go"
    import Icon from "./common/icon"

    export default {
        name: "left-menu",
        components: {Icon},
        data: () => ({
            Dial, GO
        }),
        computed: {
            ...mapState(['nav', 'version']),
            ...mapGetters(['isAdmin']),
        },
        methods: {
            goto(route) {
                this.got(route)
            },
            ...mapActions({
                got: On.GO_TO
            })
        },
    }
</script>