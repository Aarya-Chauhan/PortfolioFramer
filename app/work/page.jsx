"use client";

import {motion} from 'framer-motion';
import React,{useState} from 'react';
import Link from 'next/link';
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import { Tooltip,TooltipContent,TooltipTrigger,TooltipProvider } from '@radix-ui/react-tooltip';
import {BsArrowUpRight, BsGithub} from 'react-icons/bs';
import Image from 'next/image';
import WorkSliderBtn from '@/components/WorkSliderBtn';


const projects = [
  {
    num: '01',
    category: 'Frontend',
    title: 'Rejouice',
    description:'This is a  clone project of the original website of rejouice created using vanilla HTML, CSS & JS.',
    stack:[
      {
        name: 'html5',
      },
      {
        name: 'CSS',
      },
      {
        name: 'Javascript',
      },
    ],
    image: '/assets/work/thumb3.png',
    live:'https://rejouice-clone-blue.vercel.app/',
    github: 'https://github.com/Aarya-Chauhan/REJOUICE_clone',
  },
  {
    num: '02',
    category: 'UI',
    title: 'Netflix Clone',
    description:'Cloned landing page of Netflix.',
    stack:[
      {
        name: 'html5',
      },
      {
        name: 'Javascript',
      },
      {
        name: 'CSS',
      },
    ],
    image: '/assets/work/thumb2.png',
    live:'https://netflix-clone11.vercel.app/',
    github: 'https://github.com/Aarya-Chauhan/Netflix',
  },
  {
    num: '03',
    category: 'fullstack',
    title: 'StarWars Fandom',
    description:'A Startwar Fandom Webapp developed using nextjs and ChakraUI library.',
    stack:[
      {
        name: 'NextJS',
      },
      {
        name: 'ReactJS',
      },
      {
        name: 'ChkraUI',
      },
    ],
    image: '/assets/work/thumb4.png',
    live:'https://starwars-fandom.vercel.app/',
    github: 'https://github.com/Aarya-Chauhan/Star-Wars',
  },
  {
    num: '04',
    category: 'AutoML',
    title: 'Crystal Ball',
    description:'Interactive Web-based AutoML application for training machine learning models with minimum effort',
    stack:[
      {
        name: 'Python' ,
      },
      {
        name: 'Streamlit' ,
      },
      {
        name: 'Numpy' ,
      },
      {
        name: 'Pandas' ,
      },
    ],
    image: '/assets/work/thumb1.jpeg',
    live:'https://github.com/Aarya-Chauhan/Crystall_Ball',
    github: 'https://github.com/Aarya-Chauhan/Crystall_Ball',
  },
 
];



const Work = () => {
  const handleSlideChange = (swiper) =>{
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex])
  }
  const [project,setProject] = useState(projects[0]);
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1, transition:{delay:1.4,duration:0.6, ease:'easeIn'} }} className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>{project.num}</div>
              <h2 className='text-[42px]  font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category} Project</h2>
              <p className='text-white/60 '>{project.description}</p>
              <ul className='flex gap-4'>
                {project.stack.map((item,index)=>{
                  return <li key={index} className='text-xl text-accent'>{item.name}
                  {index !== project.stack.length - 1 && ","}</li>
                })}
              </ul>
              <div className='border border-white/20'></div>
              <div className='flex gap-4 items-center'>
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper spaceBetween={30} slidesPerView={1} className='xl:h-[540px] mb-12 ' onSlideChange={handleSlideChange}>
              {projects.map((project,index)=>{
                return <SwiperSlide key={index} className='w-full'>
                  <div className='h-[460px] relative group  flex justify-center items-center bg-pink-50/20'>
                    <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'>

                    </div>
                    <div className='relative w-full h-full'>
                      <Image src={project.image} fill  className='object-cover' alt='' />
                    </div>
                  </div>
                </SwiperSlide>
              })}
            <WorkSliderBtn containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none' btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all' />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work
