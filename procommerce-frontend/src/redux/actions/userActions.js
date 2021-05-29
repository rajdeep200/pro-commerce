import axios from "axios";

export const login = (email, password) => async(dispatch) => {
    try {
        dispatch({
            type: "USER_LOGIN_REQUEST"
        })

        const config = {
            Headers:{
                "Content-Type":"application/json"
            }
        }

        const {data} = await axios.post(
            "/users/login",
            {email,password},
            config
        )

        dispatch({
            type:"USER_LOGIN_SUCCESS",
            payload: data
        })

        localStorage.setItem("userInfo", JSON.stringify(data))

    } catch (error) {
        dispatch({
            type:"USER_LOGIN_FAIL",
            payload: error
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem("userInfo")
    dispatch({
        type: "LOGOUT"
    })
}

export const register = (name,email,password) => async (dispatch) => {
    try {
        dispatch({
            type:"USER_REGISTER_REQUEST"
        })

        const config = {
            Headers:{
                "Content-Type":"application/json"
            }
        }

        const {data} = await axios.post("/users",{
            name,email,password
        }, config)

        dispatch({
            type:"USER_REGISTER_SUCCESS",
            payload: data
        })

        dispatch({
            type:"USER_LOGIN_SUCCESS",
            payload: data
        })

        localStorage.setItem("userInfo", JSON.stringify(data))

    } catch (error) {
        dispatch({
            type:"USER_REGISTER_FAIL",
            payload: error
        })
    }
}