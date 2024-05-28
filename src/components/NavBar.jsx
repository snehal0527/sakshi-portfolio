import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from 'react-scroll';

function NavBar() {

    const [nav , setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        }
    ]
  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed" >
       <div>
            <h1 className="text-5xl font-signature">Sakshi</h1>
       </div> 

        {/* For large screen like laptopn and desktop */}
       <ul className="hidden md:flex">
        {links.map(({id, link})=>(
            <li key={id} className="px-4 capitalize cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200">
                <Link to={link} smooth duration={500}>{link}</Link>
            </li>
        ))}
       </ul>

       {/* Toggle button for mobile screens*/}
       <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
       </div>
        

        {/* For small scrrens like mobile */}
        {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-700 text-gray-500">
        {links.map(({id, link})=>(
            <li key={id} className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200 capitalize py-4 text-4xl">
                <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
            </li>
         ))}
        </ul> 
        )}
       
    </div>
  )
}

export default NavBar