"use client"

import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import {usePathname} from 'next/navigation'
import Link from "next/link"
import {CiMenuFries} from 'react-icons/ci'
import { use } from "react"



const links=[
  {
      name: 'home',
      path: "/"
  },
  {
      name: 'services',
      path: "/services"
  },
  {
      name: 'resume',
      path: "/resume"
  },
  {
      name: 'work',
      path: "/work"
  },
  {
      name: 'contact',
      path: "/contact"
  },
  
]



const MobileNav = () => {
  const pathName = usePathname()
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent border-none"/>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-20 pb-20 text-center text-2xl border-b-2">
          <Link href={"/"}>
            <h1 className='font-semibold'>
                Aarya<span className='text-accent'>.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex pt-20 flex-col justify-center items-center gap-8">
          {links.map((link,index)=>{
            return(
              <Link href={link.path} key={index} className={`${link.path === pathName && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`} >
                {link.name}
              </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
