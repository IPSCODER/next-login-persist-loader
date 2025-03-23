import { getloginTypes } from "@/types/auth.types";
import api from "../handlers/api"
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getLogin = createAsyncThunk("getLogin",async ({data}:{data:getloginTypes}) =>{
        console.log(data)
        try{
             await api.post("/login",data)    
            return {email:"psaw@gmail.com",firstName:"Pravin",lastName:"Sawant"}
        }catch(err){    
            console.log(err)
        }
    }
)