import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./auth-slice/auth.slice";
import { categoriesReducer } from "./categories-slice/categories-slice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        categories: categoriesReducer,
    },
});