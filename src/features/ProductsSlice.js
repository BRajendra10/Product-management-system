import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const URL = "http://localhost:3000/products";

export const getProducts = createAsyncThunk("fetch/products", async () => {
    const res = await axios.get(URL);
    return res.data;
});

export const addProduct = createAsyncThunk("add/product", async (newProduct) => {
    const res = await axios.post(URL, newProduct);
    return res.data;
})

const initialState = {
    products: [],
    status: "Pending...",
    error: null
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.status = "Pending...";
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = "data avilable";
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = "Data can't be fetch";
                state.error = action.payload;
            })
            .addCase(addProduct.pending, (state) => {
                state.status = "Pending...";
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.products.push(action.payload);
            })
            .addCase(addProduct.rejected, (state) => {
                state.status = "Pending...";
            })
    }
})

export default productsSlice.reducer;