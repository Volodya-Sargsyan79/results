import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    data: []
}

export const fetchData = createAsyncThunk('data/fetchData', () => {
    return axios
        .get('https://dev-api2.profasee.com/reports/test-data')
        .then((response) => response.data)
})


const dataSlice = createSlice({
    name: 'data',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.data = action.payload
        })
    }
})

export default dataSlice.reducer
