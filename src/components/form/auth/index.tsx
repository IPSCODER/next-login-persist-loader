import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SignIn from './sign-in'
import SignUp from './sign-up'

const Auth = () => {
  return (
    <>
    <Tabs defaultValue="sign-in" className="max-w-[500px] w-full shadow-md p-2 rounded-md">
  <TabsList className='w-full' >
    <TabsTrigger  value="sign-in">Sign In</TabsTrigger>
    <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
  </TabsList>
  <TabsContent value="sign-in"><SignIn/></TabsContent>
  <TabsContent value="sign-up"><SignUp/></TabsContent>
</Tabs>
    </>
  )
}

export default Auth