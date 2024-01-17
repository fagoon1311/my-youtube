import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
    name:"darkmode",
    initialState:{
        isDarkMode:false
    },
    reducers:{
        toggleDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode
        }
    }
})

export const { toggleDarkMode } = darkModeSlice.actions
export default darkModeSlice.reducer