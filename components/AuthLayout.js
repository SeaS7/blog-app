import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Protected = ({children , authentication = true}) => {
    const router = useRouter()
    const [loader, setLoader] = useState(true)
    const authState = useSelector(state => state.auth.status)

    useEffect(() => {
      if(authentication && authState !== authentication){
        router("/login")
      }else{
        if(!authentication && authState !== authentication){
            router("/")
        }
      }
      setLoader(false)
    }, [third, authentication, router])
    
  return loader ? <h1>Loading...</h1> : <>{children}</>
}

export default Protected