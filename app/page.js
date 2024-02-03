"use client"
import authService from '@/auth'
import { Footer, Header } from '@/components'
import { login, logout } from '@/store/authSlice'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Home from './Home'


const page = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then(
      (userData)=>{
        logout(userData)
        if(userData){
          dispatch(login({userData}))
        }else{
          dispatch(logout())
        }
      }
    )
    .finally(
      ()=>{
        setLoading(false)
      }
    )
  }, [])

  return !loading ? (
    <>
      <Header />
        <Home />
      <Footer />
    </>
  ):(null)
}

export default page
