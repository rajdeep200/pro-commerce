import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const {data} = await axios.get(`/products/${id}`)
    dispatch({
        type: "ADD_CART_ITEM",
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => async (dispatch, getState) => {
    dispatch({
        type:"REMOVE_CART_ITEM",
        payload: id
    })

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}

export const saveShippingAddress = (data) => async (dispatch) => {
    dispatch({
        type: "SAVE_SHIPPING_ADDRESS",
        payload: data
    })

    localStorage.setItem("shippingAddress", JSON.stringify(data))
}

export const savePaymentMethod = (data) => async (dispatch) => {
    dispatch({
        type: "SAVE_PAYMENT_METHOD",
        payload: data
    })

    localStorage.setItem("paymentMethod", JSON.stringify(data))
}