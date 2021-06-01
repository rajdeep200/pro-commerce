export const cartReducer = (state = { cartItems: [], shippingAddress: {} }, { type, payload }) => {
  switch (type) {
    case "ADD_CART_ITEM":
      const item = payload;
      const existingItem = state.cartItems.find(
        (x) => x.product === item.product
      );
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existingItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case "REMOVE_CART_ITEM":
      return{
        ...state,
        cartItems: state.cartItems.filter(x => x.product !== payload)
      }

    case "SAVE_SHIPPING_ADDRESS":
      return{
        ...state,
        shippingAddress: payload
      }

    case "SAVE_PAYMENT_METHOD":
      return{
        ...state,
        paymentMethod: payload
      }

    default:
      return state;
  }
};
