const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
const initialState = savedWishlist

export const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_WISHLIST":
      // Duplicate na add ho isliye check karenge
      if (state.find((item) => item.id === action.payload.id)) {
        return state;
      }
      return [...state, action.payload];

    case "REMOVE_WISHLIST":
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};
