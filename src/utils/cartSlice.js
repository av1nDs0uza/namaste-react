import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items: []
    },
    reducers:{
        addItem:(state, action)=>{
            // mutating the state here
            state.items.push(action.payload);
        },
        removeitem: (state) => {
            if (state.items.length > 0) {
                state.items.pop();
            }
        },
        clearCart: (state) => {
            state.items.length =0;
        },
    },
});


console.log("cartSlice module loaded");



export const {addItem,removeitem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;