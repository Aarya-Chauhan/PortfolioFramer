import Link from "next/link"
import {FaGithub, FaLinkedin, FaTwitter, FaInstagram} from 'react-icons/fa'

const socials =[
    {icon: <FaGithub/>,path:'https://github.com/Aarya-Chauhan'},
    {icon: <FaLinkedin/>,path:'https://www.linkedin.com/in/aarya-chauhan/'},
    {icon: <FaTwitter/>,path:'https://x.com/Aarya1101'},
    {icon: <FaInstagram/>,path:'https://www.instagram.com/aarya_c111/'},
    
]

const Socials = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item,index)=>{
        return(
            <a key={index} href={item.path} className={iconStyles} target="_blank">{item.icon}</a>
        )
      })}
    </div>
  )
}

export default Socials
