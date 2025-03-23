"use client"
import { Button } from '@/components/ui/button'
import { RootState } from '@/store/store'
import React from 'react'
import { useSelector } from 'react-redux'

const ChildProfile = () => {

    const firstName = useSelector((state:RootState)=> state.user.firstName)

  return (
    <>
    {!firstName ? 
        <Button href="/auth" >Login</Button> :
        <Button href='/profile'>{firstName} Profile</Button>
    }
    </>
  )
}

export default ChildProfile