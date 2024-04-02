import { configureStore } from '@reduxjs/toolkit'
import { favListSlice } from './fav-list-slice'

const store = configureStore({
    reducer: {
        favlist: favListSlice.reducer,
    },
});