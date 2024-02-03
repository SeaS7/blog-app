'use client'
import { AuthLayout, Container, PostForm } from '@/components'
import React from 'react'

const page = () => {
  return (
    <AuthLayout authentication>
    <div className='py-8'>
        <Container>
            <PostForm />
        </Container>
    </div>
    </AuthLayout>
  )
}

export default page