'use client'
import { AuthLayout, Signup } from '@/components'
import React from 'react'


const page = () => {

  return (
    <AuthLayout authentication={false}>
      <div className='py-8'>
        <Signup />
    </div>
    </AuthLayout>
    
  )
}

export default page