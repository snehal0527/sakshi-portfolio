import React from 'react'
import Snehal from "../assets/sakshi.jpg"
import {RiArrowRightSLine} from "react-icons/ri"
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col 
        items-center justify-center h-full px-4 md:flex-row text-white">
            <div className='flex flex-col justify-center h-full'> 
                <h2 className='text-4xl sm:text-7xl font-bold'> I'm a Front-End Developer</h2>
                <p className='py-4 text-gray-500 max-w-md'>
                    A detail-oriented college graduate targeting challenging roles in Web Application Development within the
                    IT sector.<br></br>I am skilled in creating dynamic and interactive websites using
                    React.js, HTML, CSS and JavaScript. Designed websites to look good and work well on all types of devices like phones, tablets, and desktops. 
                </p>
                <div>
                    <Link to="portfolio" smooth duration={500} className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
                    from-cyan-500 to-blue-500 cursor-pointer">
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                          <RiArrowRightSLine size={25} className="ml-1"/>
                        </span>
                        
                    </Link>
                </div>
            </div>
            <div>
                <img className="mx-auto rounded-2xl w-2/3 md:w-full " src={Snehal} alt=" " />
            </div>
        </div>
    </div>
  )
}

export default Home