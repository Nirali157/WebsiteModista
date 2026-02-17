
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import authReducer from "./AuthReducer";
import { wishlistReducer } from "./WishlistReducer";
import {myReducer} from "./Reducer"

const rootReducer = combineReducers({
    auth: authReducer,
      wishlist: wishlistReducer,
    myReducer: myReducer
});

export const myStore = createStore(rootReducer, applyMiddleware(thunk));