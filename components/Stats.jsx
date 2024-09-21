"use client"

import CountUp from "react-countup"

const stats = [
    {
        num: 1,
        text: "Year of expirience"
    },
    {
        num: 21,
        text: "Projects completed"
    },
    {
        num: 8,
        text: "Technologies mastered"
    },
    {
        num: 590,
        text: "Code Commits"
    },
    
]

const Stats = () => {
  return (
    <section className=" xl:pb-0 mb-2 xl:pt-0 hidden xl:block">
      <div className="container ml-0 ">
        <div className="flex flex-wrap gap-6 max-w-[80vw] xl:max-w-none justify-start items-start pl-0 xl:pl-0">
            {stats.map((item, index)=>{
                return(<div className="flex-1 flex gap-2 items-start justify-start xl:justify-start xl:items-start" key={index}>
                    <CountUp end={item.num} duration={5} delay={2} className="text-3xl xl:text-4xl font-extrabold"/> 
                    <p className={`${item.text.length<15? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
                </div>
                
                );
            })}
        </div>
      </div>
    </section>
  )
}

export default Stats
