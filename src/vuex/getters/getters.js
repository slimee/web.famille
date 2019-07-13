
export default {
    isAdmin: state => state.user && state.user.rights && state.user.rights.charAt(0) === 'G',

}