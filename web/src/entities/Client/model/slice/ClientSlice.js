import { createSlice } from "@reduxjs/toolkit";
import { PROFILE_LOCALSTORAGE_KEY } from "shared/const/localstorage";

const initialState = {
    isLoading: false,
    data: {
        firstName: "",
        lastName: "",
        email: "",
        city: "",
        street: "",
        building: "",
        entrance: "",
        floor: "",
        aparts: "",
        password: "",
    },
    orders: [],
    error: "",
};

export const clientSlice = createSlice({
    name: "client",
    initialState,
    reducers: {
        setClientData: (state, action) => {
            state.data = action.payload;
        },
        logout: (state, action) => {
            state.data = {};
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(loginByFirstName.pending, (state) => {
    //             state.data.error = undefined;
    //             state.data.isLoading = true;
    //         })
    //         .addCase(loginByFirstName.fulfilled, (state) => {
    //             state.data.isLoading = false;
    //         })
    //         .addCase(loginByFirstName.rejected, (state, action) => {
    //             state.data.isLoading = false;
    //             state.data.error = action.payload;
    //         });
    // },
});

// Action creators are generated for each case reducer function
export const { actions: clientActions } = clientSlice;
export const { reducer: clientReducer } = clientSlice;
