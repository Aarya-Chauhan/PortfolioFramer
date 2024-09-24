"use client";

import {FaHtml5,FaCss3,FaJs,FaReact,FaFigma,FaNodeJs,} from'react-icons/fa';
import {SiTailwindcss,SiNextdotjs,SiExpress} from'react-icons/si';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip';
import {ScrollArea} from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';


//about info
const about={
  title: 'About Me',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis autem minima laborum veniam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore.',
  info: [
    {
      fieldName: "Name",
      fieldValue: "Aarya Chauhan",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 97934 05151",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years",
    },
    {
      fieldName: "mail",
      fieldValue: "aaryachauhan11@gmail.com",
    },
    {
      fieldName: "nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi",
    },
  ],
};


//adding experience
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis autem minima laborum veniam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore.",
  items:[
    {
      company: "BranditUp",
      postion: "Fullstack Developer Intern",
      duration: "2023 - 2024",
    },
    {
      company: "Mood Indigo IIT Bombay",
      postion: "Indigo Squad Member",
      duration: "2022 - 2023",
    },  
    {
      company: "Foxmula",
      postion: "Web Developer",
      duration: "Summer 2022",
    },

  ]
};

//adding education
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis autem minima laborum veniam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore.",
  items:[
    {
      institution: "State University",
      degree: "Engineering Degree in Computer Science",
      duration: "2020 - 2024",
    },
    {
      institution: "Programming Course",
      degree: "Python Essensials",
      duration: "2020 - 2021",
    },
    {
      institution: "Online Course Platform",
      degree: "SQL Certification",
      duration: "2020",
    },
    {
      institution: "Design Platform",
      degree: "Responsive Web Design",
      duration: "2021",
    },
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Deelopment Bootcamp",
      duration: "2021 - 2022",
    },
    {
      institution: "Kaggle Course Platform",
      degree: "Machine Learning Essentials",
      duration: "2022 - 2023",
    },
    {
      institution: "Ethical Hacking Academy",
      degree: "Cyber Security Essentials",
      duration: "2023",
    }, 
  ]
};

//adding skills
const skills = {
  title: "My Skills",
  description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis autem minima laborum veniam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore.",
  skillList :[
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "ReactJS",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJS",
    },
    {
      icon: <SiExpress />,
      name: "ExpressJS",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind",
    }, 
    {
      icon: <SiNextdotjs />,
      name: "NextJS",
    },   
    {
      icon: <FaFigma />,
      name: "Figma",
    },  
  ]
}

const ResumePage = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:0.4,duration:0.4,ease:'easeIn'}}} className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
      <div className="container mx-auto">
        <Tabs defualtValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6' >
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About me</TabsTrigger>
          </TabsList>
          <div className='min-h-[70vh] w-full'>
            <TabsContent value='experience' className='w-full'>
                experience
            </TabsContent>
            <TabsContent value='education' className='w-full'>
                education
            </TabsContent>
            <TabsContent value='skills' className='w-full'>
                skills
            </TabsContent>
            <TabsContent value='about' className='w-full'>
                about me
            </TabsContent>
          </div>
        </Tabs>

      </div> 
    </motion.div>
  )
}

export default ResumePage
