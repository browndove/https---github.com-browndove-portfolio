"use client"
import React, { useEffect, useRef, useState } from 'react'
import SectionHead from './SectionHead'
import { reviews } from '@/constants'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Swiper as SwiperType} from 'swiper'
import "swiper/css"
import { useWindowSize } from '@/hooks/useWindowSize'

const TestimonalSection = () => {

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
        <SectionHead title='What my clients say about me'
        subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quam rerum incidunt placeat quasi cupiditate eos porro, omnis amet' />

        <div className=''>
            <div className='pb-3 border-b border-peach flex justify-between items-center'>
                <p>{reviews.length} total reviews</p>
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
            <div className='pt-'>
                <Swiper spaceBetween={20} slidesPerView={slidePreView} loop={true}
                onSwiper={(Swiper) => SwiperRef.current = Swiper}>
{
    reviews.map((review, index) => (
        <SwiperSlide key={index}>
            <SingleReview review={review} />
        </SwiperSlide>
    ))
}
                </Swiper>
            </div>
        </div>
        
    </section>
  )
}

export default TestimonalSection


const SingleReview = ({review} : {review :( typeof reviews)[0]}) =>{
    return (
        <div className='box flex flex-col gap-5'>
            <div className='flex items-center justify-between'>
                <div>
                    <h6 className='text-gray-700'>{review.name}</h6>
                    <p className="text-gray-600 text-sm">{review.designation}</p>
                </div>

                <div className='flex gap-3'>
                    {
                        review.socialLinks.map((link, index) =>(
                            <a key={index} href={link.url} className='text-purple hover:scale-105 transition-transform duration-300'>
                                <link.icon strokeWidth={0} fill="currentColor" />
                            </a>
                        ))
                    }
                
                </div>
            </div>

            <div>
                <div className="flex gap-1">
                    {
                        Array.from({length:5}).map((_ , index) =>(
                            <Star
                            key={index}
                            size={20}
                            fill='currentColor'
                            className={`text-purple ${index<review.stars ? "opacity-100" : "opacity-30"}`} />
                        ))
                    }
                </div>
            </div>
            <p className=' text-gray-600'>{review.review}</p>
        </div>
    )
}