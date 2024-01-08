"use client"
import { portfolios, reviews } from '@/constants'
import { useWindowSize } from '@/hooks/useWindowSize'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Swiper as SwiperType} from 'swiper'
import "swiper/css"
import React, { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import PortfolioItem from './PortfolioItem'

const PortfolioSelection = ({data, title} : {data: typeof portfolios, title: string}) => {

    const SwiperRef = useRef<SwiperType>()
    const [slidePreView, setSlidePreView] = useState(3)
    const {width} = useWindowSize()
    
    useEffect(() =>{
        if (width < 768) {
            setSlidePreView(1)
        } else if (width < 1268) {
            setSlidePreView(2)
        } else  {
            setSlidePreView(3)
        } 
    }, [width])


  return (
    <section className='max-width section-padding'>
      <div className='pb-3 border-b border-peach flex justify-between items-center'>
                <p>{title}</p>
                <div className='flex gap-2'>
                    <button className='bg-peach-200 border-peach p-1 rounded text-gray-700'
                    onClick={()=>SwiperRef.current?.slidePrev()}>
                        <ChevronLeft />
                    </button>
                    <button className='bg-peach-200 border-peach p-1 rounded text-gray-700'
                     onClick={()=>SwiperRef.current?.slideNext()}>
                        <ChevronRight />
                    </button>
                </div>
            </div>

            <div className='pt-8'>
                <Swiper spaceBetween={20} slidesPerView={slidePreView} loop={true}
                 onSwiper={(Swiper) => SwiperRef.current = Swiper}>
{
    data.map((portfolio,index)=>(
        <SwiperSlide key={index}>
            <PortfolioItem portfolio={portfolio} />
        </SwiperSlide>
    ))
}
                </Swiper>
            </div>
    </section>
  )
}

export default PortfolioSelection
