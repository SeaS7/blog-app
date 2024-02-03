
'use client'
import { AuthLayout, Login } from '@/components'
import React from 'react'


const page = () => {

  return (
    <AuthLayout authentication={false}>
      <div className='py-8'>
      <Login />
    </div>
    </AuthLayout>
    
  )
}

export default page