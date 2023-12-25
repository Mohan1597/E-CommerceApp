import { productDetailsjsonData } from "../Components/ProductOwners/SampleData";
import { createSlice } from "@reduxjs/toolkit";

let maxId = 0;

const productSlice = createSlice({
    name: "Products",
    initialState: productDetailsjsonData,
    reducers: {
        addNewProduct: (state, action) => {
            maxId = Math.max(...state.map(item => item.id), 0);
            state.push({
                id: maxId + 1,
                productName: action.payload.productName,
                quantity: action.payload.quantity
            });
        },
        removeProduct: (state, action) => {
            const indexToRemove = state.findIndex(item => item.id === action.payload.id);
            if (indexToRemove !== -1) {
                state.splice(indexToRemove, 1);
            }
        }
    }
});

export const { addNewProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;
