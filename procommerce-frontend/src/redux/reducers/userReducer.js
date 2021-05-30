export const userLoginReducer = (state={}, {type,payload}) => {
    switch (type) {
        case "USER_LOGIN_REQUEST":
            return {loading: true}
        case "USER_LOGIN_SUCCESS":
            return {loading: false, userInfo: payload}
        case "USER_LOGIN_FAIL":
            return {loading: false, error: payload}
        case "LOGOUT":
            return {}
        default:
            return state;
    }
}

export const userRegisterReducer = (state = {}, {type,payload}) => {
    switch(type){
        case "USER_REGISTER_REQUEST":
            return {loading: true}
        case "USER_REGISTER_SUCCESS":
            return {loading: false, userInfo: payload}
        case "USER_REGISTER_FAIL":
            return {loading: false, error: payload}
        default:
            return state
    }
}

export const userDetailsReducer = (state = { user:{} }, {type,payload}) => {
    switch(type){
        case "USER_DETAILS_REQUEST":
            return {...state, loading: true}
        case "USER_DETAILS_SUCCESS":
            return {loading: false, user: payload}
        case "USER_DETAILS_FAIL":
            return {loading: false, error: payload}
        default:
            return state
    }
}

export const userUpdateProfileReducer = (state = {}, {type,payload}) => {
    switch(type){
        case "USER_UPDATE_PROFILE_REQUEST":
            return {loading: true}
        case "USER_UPDATE_PROFILE_SUCCESS":
            return {loading: false, success:true, userInfo: payload}
        case "USER_UPDATE_PROFILE_FAIL":
            return {loading: false, error: payload}
        default:
            return state
    }
}