"use client"

import {motion} from 'framer-motion';
import React,{useState} from 'react';
import Link from 'next/link';
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import { Tooltip,TooltipContent,TooltipTrigger,TooltipProvider } from '@radix-ui/react-tooltip';
import {BsArrowUpRight, BsGithub} from 'react-icons/bs';
import Image from 'next/image';


const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'project 1',
    description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, animi.',
    stack:[
      {
        name: 'html5',
      },
      {
        name: 'html5',
      },
      {
        name: 'html5',
      },
      {
        name: 'html5',
      },
      {
        name: 'html5',
      },
    ],
    image: '/assets/work/thumb1.png',
    live:'',
    github: '',
  },
  {
    num: '01',
    category: 'frontend',
    title: 'project 1',
    description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, animi.',
    stack:[
      {
        name: 'html5',
      },
      {
        name: 'html5',
      },
      {
        name: 'html5',
      },
      {
        name: 'html5',
      },
      {
        name: 'html5',
      },
    ],
    image: '/assets/work/thumb1.png',
    live:'',
    github: '',
  },
  {
    num: '01',
    category: 'frontend',
    title: 'project 1',
    description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, animi.',
    stack:[
      {
        name: 'html5',
      },
      {
        name: 'html5',
      },
      {
        name: 'html5',
      },
      {
        name: 'html5',
      },
      {
        name: 'html5',
      },
    ],
    image: '/assets/work/thumb1.png',
    live:'',
    github: '',
  },
  {
    num: '01',
    category: 'frontend',
    title: 'project 1',
    description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, animi.',
    stack:[
      {
        name: 'html5',
      },
      {
        name: 'html5',
      },
      {
        name: 'html5',
      },
      {
        name: 'html5',
      },
      {
        name: 'html5',
      },
    ],
    image: '/assets/work/thumb1.png',
    live:'',
    github: '',
  },
];



const Work = () => {
  const [project,setProject] = useState(projects[0])
  return (
    <motion.section initial={{opacity:1}} animate={{opacity:1, }} className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div>
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>{projects.num}</div>
              <h2>{project.category}</h2>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>slider</div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work
