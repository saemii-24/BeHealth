import {configureStore, createSlice} from '@reduxjs/toolkit';

let user = createSlice({
    name:'user',
    initialState: null,
    reducers:{
    }
})


export default configureStore({
    reducer: {
        user: user.reducer
    }
})