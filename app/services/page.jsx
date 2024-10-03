"use client"

import {BsArrowDownRight} from 'react-icons/bs'
import Link from 'next/link'

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'Innovative Websites, Tailored for You.',
    href: "/contact"
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description: 'Designing Intuitive Interfaces for Memorable Experiences.',
    href: "/contact"
  },
  {
    num: '03',
    title: 'AI/ML',
    description: 'Empowering Your Ideas with Intelligent Automation.',
    href: "/contact"
  },
  {
    num: '04',
    title: 'SEO',
    description: 'Elevating Your Online Presence, One Search at a Time.',
    href: "/contact"
  },
];

import {motion} from 'framer-motion';



const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className="container mx-auto">
        <motion.div initial={{opacity:0}} animate={{opacity: 1, transition:{delay:1.5, duration:0.4, ease:'easeIn'}}} className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
            {services.map((service,index)=>{
              return(
                <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                  <div className='w-full flex justify-between items-center'>
                    <div className='xl:text-5xl text-4xl  font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
                    <Link href={service.href} className='w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                    <BsArrowDownRight className='text-primary xl:text-3xl text-xl' />
                    </Link>
                  </div>
                  <h2 className='xl:text-[42px] text-[30px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                  <p className='text-white/60'>{service.description}</p>
                  <div className='border-b border-white/20 w-full'></div>
                </div>
              )
            })}
        </motion.div>
      </div> 
    </section>
  )
}

export default Services
