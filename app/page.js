"use client"
import authService from '@/auth'
import { Footer, Header } from '@/components'
import nextConfig from '@/next.config.mjs'
import { login, logout } from '@/store/authSlice'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'


const page = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then(
      (userData)=>{
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
      <div>page</div>
      <Footer />
    </>
  ):(null)
}

export default page