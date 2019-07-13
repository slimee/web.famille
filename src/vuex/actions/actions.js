import appActions from "./appActions";
import userActions from "./userActions"
import snackbarActions from "./snackbarActions"
import navActions from "./navActions"
import eventActions from "./eventActions"

export default {
    ...navActions,
    ...snackbarActions,
    ...userActions,
    ...appActions,
    ...eventActions
}
