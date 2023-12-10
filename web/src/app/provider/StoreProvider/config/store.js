import { configureStore } from "@reduxjs/toolkit";
import { clientReducer } from "entities/Client";
import { courierReducer } from "entities/Courier";
import { authReducer } from "features/Auth";
import { cartReducer } from "features/Cart";
import { goodsPageReducer } from "pages/GoodsPage";
import { ordersPageReducer } from "pages/OrdersPage";
import { $api } from "shared/api/api";

const extraArg = {
    api: $api,
};

export const store = configureStore({
    reducer: {
        client: clientReducer,
        courier: courierReducer,
        auth: authReducer,
        cart: cartReducer,
        goodsPage: goodsPageReducer,
        ordersPage: ordersPageReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),
});
