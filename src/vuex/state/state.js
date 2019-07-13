import ENV from "../../env"
import {dialogs} from "./dialogState"
import {snack} from "./snackState"

export default {
    version: {web: ENV.VERSION},
    user: null,
    dialogs: dialogs(),
    snack: snack(),
    nav: {
        leftMenuVisible: false
    }
}