export const myAction = (payload) => {
    return {
        type: 'ADD',
        payload
    }
}
export const incrementQuantity=(index)=>{
    return{
        type:'INCREMENT',
        index
    }
}
export const decrementQuantity=(index)=>{
    return{
        type:'DECREMENT',
        index
    }
}
export const deleteProduct=(payload)=>{
    return{
        type:'DELETE',
        payload
    }
}
export const addWishlist = (product) => {
  return {
    type: "ADD_WISHLIST",
    payload: product,
  };
};

export const removeWishlist = (id) => {
  return {
    type: "REMOVE_WISHLIST",
    payload: id,
  };
};