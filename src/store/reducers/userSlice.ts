import { getLogin } from '@/api/services/auth.service';
import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  email: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
}

const initialState: UserState = {
  email: undefined,
  firstName:undefined,
  lastName:undefined
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
    },
    clearUser: (state) => {
      state.email = undefined;
      state.firstName = undefined;
      state.lastName = undefined;
    }
  },
  extraReducers:(builder) =>{
    builder.addCase(getLogin.fulfilled,(state,action) =>{
      state.email = action?.payload?.email || state.email ;
      state.firstName = action?.payload?.firstName || state.firstName ;
      state.lastName = action?.payload?.lastName || state.lastName ;
    })
  }
});

export const { setUser ,clearUser } = userSlice.actions;
export default userSlice.reducer;