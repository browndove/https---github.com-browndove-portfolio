import { Session } from 'inspector'
import { ArrowBigRight, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <section className='flex items-center max-width flex-col-reverse tablet:flex-row mb-10'>
      {/* leftside */}
      <div className='tablet:w-2/3 mt-10 tablet:mt-0'>
        <div className='flex flex-col gap-3 items-center tablet:items-start text-center tablet:text-left'>
          <p className='px-4 py-2 bg-peach-600 text-gray-600 w-max rounded'>hello there 👋</p>
          <h1 className='text-grey'>Christian Ampeh welcome's you</h1>
          <p className='text-grey-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Commodi molestias doloribus distinctio totam illum. <br /> Pariatur reiciendis illo eveniet. 
             Totam deserunt iure molestiae mollitia obcaecati, illo rerum cum quasi esse amet?</p>
        </div>
        <div className='flex gap-5 mt-10 justify-center tablet:justify-start'>
          <Link href={"/contact"} className='btn btn-primary'>
            <Phone />
            Contact now
          </Link>

          <Link href={"/contact"} className='btn '>
            View portfolio 
            <ArrowBigRight size={16} />
          </Link>
        </div>
      </div>
      {/* rightside */}
      <div className='relative w-full tablet:w-1/3 h-[400px] tablet:h-[700px] rounded-b-2xl overflow-hidden mt-5'>
        <Image src={"/images/hero.png"} alt='hero' fill className='object-cover ' />
      </div>
    </section>

   
    <section className='max-width section-padding'>
      <SectionHead title="creative skills" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi officia ex maxime sunt quae nam facere. Dolor, accusantium architecto cupiditate velit iste esse provident cum ab sint consequuntur earum nam."/>
      
    </section>
    </>
  )
}

export default page
