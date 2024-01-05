import FaqsSection from '@/Components/FaqsSection'
import PortfolioItem from '@/Components/PortfolioItem'
import SectionHead from '@/Components/SectionHead'
import TestimonalSection from '@/Components/TestimonalSection'
import { benefits, portfolios, skills } from '@/constants'
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
             Totam deserunt iure molestiae mollitia obcaecati, illo rerum cum <br /> quasi esse amet?</p>
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

{/* stats */}

<div className='bg-peach-400 w-full py-8 px-10 rounded-l-lg mt-16 flex-wrap gap-12 hidden tablet:flex'>
    <div className=''>
<h3 className='text-gray-700'>55 <span className='text-purple'>+</span></h3>
<p className='text-gray-600'>Projects Completed</p>
    </div>

    <div className=''>
<h3 className='text-gray-700'>30 <span className='text-purple'>+</span></h3>
<p className='text-gray-600'>Happy Customers</p>
    </div>

    <div className=''>
<h3 className='text-gray-700'>5 <span className='text-purple'>+</span></h3>
<p className='text-gray-600'>Years of experience</p>
    </div>


</div>


<div className=' mt-16 grid grid-cols-2 gap-3 tablet:hidden'>
    <div className='py-8 px-10 rounded-lg bg-peach-400 text-center col-span-2'>
<h3 className='text-gray-700'>55 <span className='text-purple'>+</span></h3>
<p className='text-gray-600'>Projects Completed</p>
    </div>

    <div className='py-8 px-10 rounded-lg bg-peach-400 text-center col-span-2'>
<h3 className='text-gray-700'>30 <span className='text-purple'>+</span></h3>
<p className='text-gray-600'>Happy Customers</p>
    </div>

    <div className='py-8 px-10 rounded-lg bg-peach-400 text-center col-span-2'>
<h3 className='text-gray-700'>5 <span className='text-purple'>+</span></h3>
<p className='text-gray-600'>Years of experience</p>
    </div>


</div>


      </div>
      {/* rightside */}
      <div className='relative w-full tablet:w-1/3 h-[400px] tablet:h-[700px] rounded-b-2xl overflow-hidden mt-5'>
        <Image src={"/images/teen.jpg"} alt='hero' fill className='object-cover ' />
      </div>
    </section>

   
    <section className='max-width section-padding'>
      <SectionHead title="creative skills" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi officia ex maxime sunt quae nam facere. Dolor, accusantium architecto cupiditate velit iste esse provident cum ab sint consequuntur earum nam."/>
      

{/* skills */}
<div className='grid  grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))]
gap-3 tablet:gap-6'>
{
  skills.map((skill, index) => (
    <div key={index} className='box flex flex-col items-center gap-5'>
      <div className='w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-2'>
        <Image src={skill.icon} alt={skill.name} width={35} height={35} />
      </div>

      <div className='text-center'>
        <h4 className='text-gray-700 mb-2'>{skill.name}</h4>
        <p className="text-gray-600">{skill.description}</p>
      </div>

    </div>
  ))
}
</div>
    </section>

{/* benifits section*/}
<section className="max-width section-padding">
  <SectionHead title='Benefits' subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maxime minus eos expedita odit saepe architecto similique distinctio? Minima modi delectus cum laborum soluta neque harum magni optio unde cupiditate?'/>

  <div className='grid  grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))]
gap-3 tablet:gap-6 mb-3 tablet:mb-6'>
  {
    benefits.slice(0, 2).map((benefit, index) => (
      <div key={index} className='box'>
        <h5 className='text-gray-700 mb-2'>{benefit.name}</h5>
        <p className='text-gray-600'>{benefit.description}</p>
      </div>
    )
    )
  }
</div>

<div className='grid  grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))]
gap-3 tablet:gap-6'>
  {
    benefits.slice( 2).map((benefit, index) => (
      <div key={index} className='box'>
        <h5 className='text-gray-700 mb-2'>{benefit.name}</h5>
        <p className='text-gray-600'>{benefit.description}</p>
      </div>
    )
    )
  }
</div>
  </section>

  {/* portfolio */}
  <section className="section-padding max-width">
    <SectionHead title='My Work' subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quod quibusdam doloribus dicta aperiam voluptatum quidem maiores' />
    

    <div className='grid  grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))]
gap-3 tablet:gap-6'>
  {
    portfolios.slice(0, 3).map((portfolio, index) =>(
      <PortfolioItem key={index} portfolio={portfolio} />
    ))
  }

</div>


 <Link href={"/portfolio"} className='btn btn-primary mt-10 mx-auto w-max'>
  View All Projects
 </Link>

  </section>

  {/* testimonals */}

    <TestimonalSection />
  
  {/* FAQs */}
<FaqsSection />

    </>
  )
}

export default page
