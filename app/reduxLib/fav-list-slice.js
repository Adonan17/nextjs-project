import { createSlice } from '@reduxjs/toolkit'

const favList = createSlice({
    name: 'fav-list',
    initialState: {
        items: [],
    }
})

export default favListSlice;