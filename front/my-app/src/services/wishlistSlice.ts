import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CartItemType from "../models/cartItem";

export interface WishlistState {
  quantity: number;
  cartItems: CartItemType[];
  totalAmount: number;
  wishlistquantity?: number;
}

export const initialState: WishlistState = {
  quantity: 0,
  cartItems: [],
  totalAmount: 0,
  wishlistquantity: 0,
};

// Function to retrieve cart data from local storage
const loadState = (): WishlistState | undefined => {
  try {
    const serializedState = localStorage.getItem("wishlist");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Function to save cart data to local storage
const saveState = (state: WishlistState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("wishlist", serializedState);
  } catch {
    // Ignore write errors
  }
};

const updateWishInLocalStorage = (
  cartItems: CartItemType[],
  totalAmount: number,
  quantity: number
) => {
  const wishlistState = { cartItems, totalAmount, quantity };
  saveState(wishlistState);
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: loadState() || initialState,
  reducers: {
    addToWishlist: (state, { payload }: PayloadAction<CartItemType>) => {
      const isItemExist = state.cartItems.find((item) => item.id === payload.id);
      if (!isItemExist) {
        state.cartItems = [...state.cartItems, { ...payload }];
        state.quantity = 1;
      }
      state.totalAmount += Number(payload.price) * payload.quantity;
      state.quantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      updateWishInLocalStorage(state.cartItems, state.totalAmount, state.quantity);
    },

    removeFromWishlist: (state, { payload }: PayloadAction<CartItemType>) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== payload.id);
      state.quantity -= payload.quantity;
      state.totalAmount -= Number(payload.price || 0) * payload.quantity;
      saveState(state);
    },

    clearWishlist: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
      state.quantity = 0;
      saveState(state);
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
