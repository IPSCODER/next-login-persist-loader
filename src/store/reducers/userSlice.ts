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
  },
  extraReducers:(builder) =>{
    builder.addCase(getLogin.fulfilled,(state,action) =>{
      state.email = action?.payload?.email;
      state.firstName = action?.payload?.firstName;
      state.lastName = action?.payload?.lastName
    })
  }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;