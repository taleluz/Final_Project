import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CartItemType from "../../../models/cartItem"


interface CartState {
  quantity: number;
  cartItems: CartItemType[];
  totalAmount: number;
}

const initialState: CartState = {
  quantity: 0,
  cartItems: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<CartItemType>) => {
      // console.log(payload)
      const isItemExist = state.cartItems.find((item) => item.id === payload.id);
      if (!isItemExist) {
        state.cartItems = [...state.cartItems, { ...payload }];
        state.quantity = payload.quantity
      } else {
        state.cartItems = state.cartItems.map((item) => {
          if (item.id === payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
      // state.quantity++;
      state.totalAmount += Number(payload.price) * payload.quantity;
      // state.totalAmount += payload.price;
    
    },

    removeFromCart: (state, { payload }: PayloadAction<CartItemType>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== payload.id
      );
      state.quantity -= payload.quantity;
      // state.totalAmount -= payload.price * payload.quantity;
      state.totalAmount -= Number(payload.price || 0) * payload.quantity;
    },

    addItemQuantity: (state, { payload }: PayloadAction<CartItemType>) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      state.quantity++;
      state.totalAmount += Number(payload.price)
    },

    subtractItemQuantity: (state, { payload }: PayloadAction<CartItemType>) => {
      const subItem = state.cartItems.find((item) => item.id === payload.id);
      if (subItem?.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== subItem.id
        );
      } else {
        subItem!.quantity -= 1;
      }
      state.quantity--;
      state.totalAmount -= Number(subItem!.price);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addItemQuantity,
  subtractItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
