"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@radix-ui/react-select";
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
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">form</form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            info
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default ContactPage
