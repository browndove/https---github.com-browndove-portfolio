import React from 'react'
import SectionHead from './SectionHead'
import { ArrowRight,  Star } from 'lucide-react'
import Link, { LinkProps } from 'next/link'
import { faqs } from '@/constants'
import Accordion from './Accordion'

const FaqsSection = () => {
  return (
    <section className='max-width section-padding overflow-hidden'>
      <SectionHead title='Frequently Asked Questions' subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nulla vitae
       dicta laboriosam natus optio dolor aliquid ex error praesentium sapiente aut quam' />

<div className='flex flex-col tablet:flex-row gap-5 items-start'>
       <div className="box">
        <Accordion data={faqs} />
       </div>
       <div className='box flex flex-col gap-5 tablet:max-w-md'>
        <div className='w-16 h-16 rounded bg-purple text-peach-100 flex items-center justify-center flex-shrink-0
        mb-2'>
            <Star fill='currentColor' size={30} />
        </div>
        <div>
            <h5 className='text-gray-700 mb-2'>Still have any questions?</h5>
            <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nulla vitae
       dicta laboriosam natus optio dolor aliquid ex error praesentium sapiente aut quam</p>
        </div>
        
<Link href={"/contact"} className='btn btn-primary w-max'>
    Contact me <ArrowRight />
</Link>

       </div>
       </div>
      
    </section>
  )
}

export default FaqsSection
