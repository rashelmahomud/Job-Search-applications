import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase/firebase.config';

const initialState = {
    email: '',
    role: "",
    isLoading: true,
    isError: false,
    errror: '',
};

export const createUser = createAsyncThunk("auth/createUser", async ({ email, password }) => {

    const data = await createUserWithEmailAndPassword(auth, email, password);
    return data.user.email;
});

export const loginUser = createAsyncThunk("auth/loginUser", async ({ email, password }) => {

    const data = await signInWithEmailAndPassword(auth, email, password);
    return data.user.email;
});


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.email = "";
        }
    },
    extraReducers: (builder) => {

        builder.addCase(createUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.errror = "";
        })
            .addCase(createUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.email = action.payload;
                state.isError = false;
                state.errror = "";
            })
            .addCase(createUser.rejected, (state, action) => {
                state.isLoading = false;
                state.email = "";
                state.isError = false;
                state.errror = action.error.message;
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.errror = "";
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.email = action.payload;
                state.isError = false;
                state.errror = "";
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.email = "";
                state.isError = false;
                state.errror = action.error.message;
            })

    }
})

export const { logout } = authSlice.actions;

export default authSlice.reducer;