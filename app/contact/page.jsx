"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import {FaPhoneAlt, FaEnvelope, FaMapMarkedAlt} from 'react-icons/fa' ;

const info =[
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+91 9793405151)'
  },
  {
    icon: <FaEnvelope />,
    title: 'email',
    description: 'aaryachauhan11@gmail.com'
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Location',
    description: 'India'
  },

]


const ContactPage = () => {
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1, transition:{delay:1.4, duration:0.6, ease:"easeIn"}}} className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's Work Together</h3>
              <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae quos laudantium at vitae.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input className='rounded-xl' type='firstname' placeholder='Firstname'/>
                <Input className='rounded-xl' type='lastname' placeholder='Lastname'/>
                <Input className='rounded-xl' type='emial' placeholder='Email address'/>
                <Input className='rounded-xl' type='phone' placeholder='Phone number '/>
              </div>
              <Textarea className='h-[200px]' placeholder='Type your message here.'/>
              <Button size='md' className='max-w-40'>Send Message</Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item,index)=>{
                return <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60 capitalize">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default ContactPage
