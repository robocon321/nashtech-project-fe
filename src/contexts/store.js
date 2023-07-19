import { configureStore } from "@reduxjs/toolkit";
import addressReducer from "@contexts/reducers/client/AddressSlice";
import homeReducer from "@contexts/reducers/client/HomeSlice";
import productReducer from "@contexts/reducers/client/ProductSlice";

export default configureStore({
    reducer: {
        addressReducer,
        homeReducer,
        productReducer,
    }
});