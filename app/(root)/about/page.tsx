import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'


export const metadata:Metadata = {
    title: "About - Christian Ampeh",
}

const page = () => {
  return (
    <>

    <section className='max-width section-padding flex flex-col tablet:flex-row gap-20 items-center'>
        <div className='relative w-full tablet:1/2 h-[calc(300px+20vw)] tablet:h-[600px]'>
           <Image src={"/images/teen.jpg"} fill alt='about Images' className='object-cover' />
        </div>
        <div className='tablet:w-1/2'></div>
    </section>
      
    </>
  )
}

export default page
