import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import authService from './authService'
import { User } from "@/lib/types";
// get user from localStorage
//initial state 

interface InitialState {
    user:User | undefined | null,
    isError:boolean,
    isSuccess:boolean,
    isLoading:boolean,
    message:string | null
}


const user:any =JSON.parse(localStorage.getItem("user") ||"null")
const initialState:InitialState = {
    user:user ? user : null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}
//Register the user
//action/
export const register=createAsyncThunk("auth/register",async(user:Partial<Omit<User,"token">> & {password?:string}) => {
try{
   return await authService.register(user) 
}catch(error:any) {
    const message=(error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    // return thunkAPI.rejectWithValue(message)

}

})
export const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        reset:(state) => {
            state.isLoading=false
            state.isError=false
            state.isSuccess=false
            state.message=""
        }

    },
    extraReducers:(builder) => {
        builder
        .addCase(register.pending,(state) => {
            state.isLoading=true
        })
        .addCase(register.fulfilled,(state,action) => {
            state.isLoading=false
            state.isSuccess=true
            state.user=action.payload
        })
        .addCase(register.rejected,(state,action)=> {
            state.isLoading=false
            state.isError=true
            state.message=action.payload as string
            state.user=null

        })

    }
})


export const {reset}=authSlice.actions
export default authSlice.reducer

