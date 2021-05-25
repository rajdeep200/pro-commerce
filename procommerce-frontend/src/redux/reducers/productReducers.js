const initialState = {
  products: [],
};

export const productListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "PRODUCT_LIST_REQUEST":
      return { loading: true, products: [] };
    case "PRODUCT_LIST_SUCCESS":
      return { loading: false, products: payload };
    case "PRODUCT_LIST_FAIL":
      return { loading: true, error: payload };

    default:
      return state;
  }
};

export const productDetailsReducer = (state = {product:{reviews:[]}}, { type, payload }) => {
  switch (type) {
    case "PRODUCT_DETAILS_REQUEST":
      return { loading: true, ...state };
    case "PRODUCT_DETAILS_SUCCESS":
      return { loading: false, product: payload };
    case "PRODUCT_DETAILS_FAIL":
      return { loading: true, error: payload };

    default:
      return state;
  }
};
