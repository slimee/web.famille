import userMutation from "./userMutation"
import dialogMutations from "./dialogMutations"
import snackbarMutations from "./snackbarMutations"

export default {
    ...snackbarMutations,
    ...dialogMutations,
    ...userMutation
};