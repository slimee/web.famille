<template>

</template>

<script>
    import {mapState} from "vuex"

    export default {
        name: "Draw",
        components: {},
        computed: {
            ...mapState(["activeFilm", "activePen"])
        }
    }
</script>

<style scoped>

</style>