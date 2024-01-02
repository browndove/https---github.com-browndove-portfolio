import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export default layout
