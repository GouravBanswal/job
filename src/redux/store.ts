import { configureStore } from "@reduxjs/toolkit";
import publicSlice from "./slice/publicSlice";
import companySlice from "./slice/companySlice";

const reduxStore = configureStore({
    reducer: {
        public: publicSlice,
        company: companySlice,
    }
})

export type RootType = ReturnType<typeof reduxStore.getState>
export type DispatchType = typeof reduxStore.dispatch

export default reduxStore