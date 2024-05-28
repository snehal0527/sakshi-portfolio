/* eslint-disable no-useless-concat */
import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"

 const SocialLinks = () => {

    const links=[
        {
            id:1,
            child:(
                <>
                LinkedIn<FaLinkedin size={30} />
            </>
            ),
            href:"https://www.linkedin.com/in/sakshi-birajdar-081635266/",
            style: "rounded-tr-md"
        },

        {
            id:3,
            child:(
                <>
                Mail<HiOutlineMail size={30} />
            </>
            ),
            href:"mailto:sakshibirajdar2003@gmail.com",
            
        },

        {
            id:4,
            child:(
                <>
                Resume<BsFillPersonLinesFill size={30} />
            </>
            ),
            href:"/sakshi-resume.pdf",
            style: "rounded-br-md",
            download: true,
        }
    ]

  return (
    <div className='hidden-lg:flex flex-col fixed top-[35%] left-0'>
        <ul>
            {links.map(({child,href,id,style,download}) => (
                // Total width is w-40 which is 160px. And we are giving margin as -100px. That why it is hidden inside. When we hover just hide -10px and show the 150px.
                <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" + " " + style}>
                <a href={href} 
                className="flex justify-between items-center w-full text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
                >
                   {child}
                </a>

            </li>
            ))}
            
        </ul>
    </div>
  )
}


export default SocialLinks;
