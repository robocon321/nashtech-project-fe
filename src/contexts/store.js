import { configureStore } from "@reduxjs/toolkit";
import addressSlice from "./reducers/client/AddressSlice";

export default configureStore({
    reducer: {
        addressSlice
    }
});