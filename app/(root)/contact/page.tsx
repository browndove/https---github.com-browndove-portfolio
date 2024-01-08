import FaqsSection from '@/Components/FaqsSection'
import { socialLinks } from '@/constants'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'


export const metadata: Metadata = {
    title: "Contact - Christian Ampeh",
}


const page = () => {
  return (
    <>
      <section className='section-padding max-width'>
            <div className='box text-center items-center flex flex-col gap-3'>
                <div className='w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-5'>
                    <Image src={"/icons/stars.svg"} alt='icons' width={35} height={35} />
                </div>
                <h2 className='text-gray-700'>I'd love to hear from you</h2>
                <p className='text-gray-600'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Placeat architecto eius veritatis accusantium impedit molestias. 
                </p>
            </div>
      </section> 

      <section className='section-padding max-width flex max-tablet:flex-col gap-16'>
        <div className='tablet:max-w-md w-full'>
<div className='space-y-4'>
<div className='box !p-6'>
<p className='text-gray-600'> You can Email me here</p>
<h6 className='text-gray-700'>Bluebird23szn@gmail.com</h6>
</div>

<div className='box !p-6'>
<p className='text-gray-600'>Give me a call on</p>
<h6 className='text-gray-700'>+233 549683967</h6>
</div>

<div className='box !p-6'>
<p className='text-gray-600'>Location</p>
<h6 className='text-gray-700'>Atomic-Accra Ghana</h6>
</div>

<h6 className="mt-10 text-gray-700 max-tablet:text-center mb-3">My social Profiles</h6>


<div className="flex gap-3 box !p-6 w-max max-tablet:mx-auto">
    {
        socialLinks.map((link, index) =>(
            <a href={link.url} key={index} className='w-10 h-10 bg-purple text-peach items-center justify-center
            rounded'>
                <link.icon stroke='0' fill='currentColor' />
            </a>
        ))
    }
</div>
</div>


        </div>

        <div className='box w-full'>
            <form action="" className='space-y-5'>
<div className='flex gap-5 max-tablet:flex-col'>
<input type="text" placeholder='First Name' />
<input type="text" placeholder='Last Name' />
</div>

        <div className='flex gap-5 max-tablet:flex-col'>
        <input type="email" placeholder='Email' />
        <input type="text" placeholder='Phone' />
        </div>
        <textarea placeholder='Message' className='min-h-[200px]'></textarea>
        <button type='submit' className='btn btn-primary'> Send</button>
            </form>
        </div>
      </section>

      <FaqsSection />
    </>
  )
}

export default page
