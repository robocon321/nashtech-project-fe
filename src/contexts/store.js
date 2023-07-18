import { configureStore } from "@reduxjs/toolkit";
import addressReducer from "./reducers/client/AddressSlice";

export default configureStore({
    reducer: {
        addressReducer
    }
});