import PortfolioSelection from '@/Components/PortfolioSelection'
import { portfolios } from '@/constants'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'


export const metadata: Metadata = {
    title: "Portfolio - Christian Ampeh",
}

const page = () => {
  return (
    <>
      <section className='section-padding max-width'>
            <div className='box text-center items-center flex flex-col gap-3'>
                <div className='w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-5'>
                    <Image src={"/icons/stars.svg"} alt='icons' width={35} height={35} />
                </div>
                <h2 className='text-gray-700'>My creative portfolio</h2>
                <p className='text-gray-600'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Placeat architecto eius veritatis accusantium impedit molestias. 
                </p>
            </div>
      </section>

      <PortfolioSelection data={portfolios} title={"projects done in 2023"} />
      <PortfolioSelection data={portfolios.slice(3).concat(portfolios.slice(0, 3))} title={"projects done in 2022"} />
      <PortfolioSelection data={portfolios.slice(6).concat(portfolios.slice(0, 6))} title={"projects done in 2021"} />
    </>
  )
}

export default page
