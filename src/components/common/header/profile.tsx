"use client"
import { Button } from '@/components/ui/button'
import { AppDispatch, RootState } from '@/store/store'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { persistor } from "@/store/store";
import { clearUser } from '@/store/reducers/userSlice'



const ChildProfile = () => {

  const dispatch = useDispatch<AppDispatch>()


    const firstName = useSelector((state:RootState)=> state.user.firstName)
    const handleLogout = () => {
      persistor.purge(); // Clears persisted state
      dispatch(clearUser());
    };

  return (
    <>
    {!firstName ? 
        <Button href="/auth" >Login</Button> :
        <Button onClick={handleLogout} >{firstName} Logout</Button>
    }
    </>
  )
}

export default ChildProfile