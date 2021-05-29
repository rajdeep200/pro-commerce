export const userLoginReducer = (state={}, {type,payload}) => {
    switch (type) {
        case "USER_LOGIN_REQUEST":
            return {loading: true}
        case "USER_LOGIN_SUCCESS":
            return {loading: false, users: payload}
        case "USER_LOGIN_FAIL":
            return {loading: true, error: payload}
        case "LOGOUT":
            return {}
        default:
            return state;
    }
}