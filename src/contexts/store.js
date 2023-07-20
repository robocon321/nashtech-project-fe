import { configureStore } from "@reduxjs/toolkit";
import addressReducer from "@contexts/reducers/client/AddressSlice";
import homeReducer from "@contexts/reducers/client/HomeSlice";
import productReducer from "@contexts/reducers/client/ProductSlice";
import cartReducer from "@contexts/reducers/client/CartSlice";
import productDetailReducer from "@contexts/reducers/client/ProductDetailSlice";
import clientLayoutReducer from "@contexts/reducers/client/ClientLayoutSlice";
import appReducer from "@contexts/reducers/AppSlice";

export default configureStore({
    reducer: {
        addressReducer,
        homeReducer,
        productReducer,
        cartReducer,
        productDetailReducer,
        clientLayoutReducer,
        appReducer
    }
});