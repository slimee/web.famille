import On from "../../const/on"
import router from "../../vrouter/router"


export default {
    [On.MOUNT_APP]: async ({dispatch}) => {
        await dispatch(On.USER_FROM_STORAGE)
        await dispatch(On.CHECK_AUTH)
    },
    [On.GO_TO]({}, route) {
        router.push({name: route})
    }
}
