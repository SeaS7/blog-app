"use client"
import React from 'react'
import { Provider } from "react-redux";
import { store } from "@/store/store";

const PageWrapper = ({children}) => {
  return (
    <Provider store={store}>
      <html lang="en">
      <body >{children}</body>
      </html>
    </Provider>
  )
}

export default PageWrapper