import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
    email: string;
    password: string;
};

const initialState: UserState = {
    email: '',
    password: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<{ email: string, password: string}>) {
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
        clearUser(state) {
            state.email = '';
            state.password = '';
        }
    }
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
