import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_LIMIT } from "./constants";

const chatSlice = createSlice({
    name:"chat",
    initialState: {
        messages: []
    },
    reducers:{
        addMessage:(state, action)=>{
            // state.messages.push(action.payload)
            state.messages.splice(LIVE_CHAT_LIMIT,1)
            state.messages.push(action.payload)

        }
    }
})

export  const { addMessage } = chatSlice.actions
export default chatSlice.reducer