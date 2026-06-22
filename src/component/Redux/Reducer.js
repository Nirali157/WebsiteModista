const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
const arr = savedCart
export const myReducer = (state = arr, action) => {
    if (action.type === 'ADD') {
        // return state = [...state, { ...action.payload, quantity: 1 }]
        const existingItem = state.find(
            (item) => item.id.toString() === action.payload.id.toString()
        );

        if (existingItem) {
            return state.map((item) =>
                item.id.toString() === action.payload.id.toString()
                    ? { ...item, quantity: (item.quantity || 1) + 1 }
                    : item
            );
        } else {
            return [...state, { ...action.payload, quantity: 1 }];
        }
    }

    else if (action.type === 'INCREMENT') {
        return state.map((item, index) =>
            index === action.index ?
                { ...item, quantity: item.quantity + 1 } : item
        )
    }
    else if (action.type === 'DECREMENT') {
        return state.map((item, index) =>
            index === action.index && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 } : item
        )
    }
    else if (action.type === 'DELETE') {
        return state.filter((el, i) => i !== action.payload);
    }
    return state
}