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
        <div>
          <form >form</form>
        </div>
      </div>
    </motion.section>
  )
}

export default ContactPage
