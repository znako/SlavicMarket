import { createAsyncThunk } from "@reduxjs/toolkit";
import { adminActions } from "entities/Admin";
import { clientActions } from "entities/Client";
import { courierActions } from "entities/Courier";
import { marketActions } from "entities/Market";
import { getAuthType } from "../../selectors/getAuthData";
import { authActions } from "../../slice/AuthSlice";
import { validateForm } from "../../../../../shared/lib/validateForm/validateForm";

export const sendLoginData = createAsyncThunk(
    "auth/sendLoginData",
    async (loginData, thunkAPI) => {
        const { extra, rejectWithValue, dispatch, getState } = thunkAPI;
        const type = getAuthType(getState());

        try {
            if (!validateForm(loginData)) {
                return rejectWithValue("Все поля должны быть заполнены");
            }
            const response = await extra.api.post(`/${type}/login`, loginData);

            if (!response.data) {
                throw new Error();
            }

            const data = { ...loginData, ...response.data };
            if (type === "client") {
                dispatch(clientActions.setClientData(data));
            } else if (type === "courier") {
                dispatch(courierActions.setCourierData(data));
            } else if (type === "market") {
                dispatch(marketActions.setMarketData(data));
            } else if (type === "admin") {
                dispatch(adminActions.setAdminData(data));
            }
            dispatch(authActions.saveAuthData(response.data));
            // return response.data;
        } catch (e) {
            return rejectWithValue("error");
        }
    }
);
