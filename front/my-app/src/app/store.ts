import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import albumsReducer from '../features/albums/albumsSlice';
import galleryReducer from '../features/gallery/gallerySlice';
import loginReducer from '../features/login/loginSlice';
import profileReducer from '../features/Profile/profileSlice';
import cartReducer from '../services/cartSlice';
import productsReducer from '../services/productsSlice';
import wishlistReducer from '../services/wishlistSlice';



export const store = configureStore({
  reducer: {
    login: loginReducer,
    gallery : galleryReducer,
    profile : profileReducer,
    albums : albumsReducer,
    products: productsReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
   
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
