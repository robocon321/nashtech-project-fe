import { configureStore } from "@reduxjs/toolkit";
import addressReducer from "@contexts/reducers/client/AddressSlice";
import homeReducer from "@contexts/reducers/client/HomeSlice";
import productReducer from "@contexts/reducers/client/ProductSlice";
import cartReducer from "@contexts/reducers/client/CartSlice";

export default configureStore({
    reducer: {
        addressReducer,
        homeReducer,
        productReducer,
        cartReducer
    }
});