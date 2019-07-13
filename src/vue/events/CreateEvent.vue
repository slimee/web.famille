<template>
    <view-edit-save>

        <v-card slot="left">
            <subpage-title iconClass="add-event logo" title="Evènement"/>
            ici event.viewer
        </v-card>

        <v-card slot="right">
            <subpage-title icon="edit" title="Modifier"/>
            <editor v-model="editing"
                    :initial="initial" :changes="changes" :editor="editor"
                    @change="change"
            />
        </v-card>

        <saver slot="bottom" v-if="!editing" updated-text="Equivalence mise à jour."
               :initial="initial" :changes="changes" :final="final" :editor="editor"
               :save-action="On.SAVE_EVENT" :update-action="On.UPDATE_EVENT" :delete-action="On.DELETE_EVENT"
               @saved="saved" @deleted="deleted"
               :route="route"
        />

    </view-edit-save>
</template>

<script>
    import Editor from "../common/Editor"
    import Saver from "../editor/Saver"
    import ViewEditSave from "../common/ViewEditSave"
    import SubpageTitle from "../common/SubpageTitle"
    import Edition from "../editor/Edition"
    import Connected from "../user/Connected"
    import On from "../../const/on"

    export default {
        name: "CreateEvent",
        components: {Editor, SubpageTitle, ViewEditSave, Saver},
        mixins: [Connected, Edition],
        data:()=>({On}),
        computed:{
            editor() {
                return [
                    {key: "Titre", title: "Nom", editor: "text-editor"},
                    {key: "détail", title: "Détail", editor: "textarea-editor", optional: true},
                ]
            }
        }
    }
</script>

<style scoped>

</style>