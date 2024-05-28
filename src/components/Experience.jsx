/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-useless-concat */
import React from 'react'
import html from "../assets/html5.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import react from "../assets/react.webp"
import tailwind from "../assets/taiwind.png"
import github from "../assets/github.png"

const Experience = () => {

    const experiences = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: "Javascript",
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: react,
            title: "React",
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: tailwind,
            title: "Node.js",
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: github,
            title: "MongoDB",
            style: 'shadow-gray-400'
        }
    ]

  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'>
                    Experience
                </p>
                <p className='py-6'>These are the technologies I have worked on.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-4 px-12 sm:px-0'>
                {
                    experiences.map(({id, src, title, style}) => (
                    <div key={id} className={"shadow-md hover:scale-105 duration-500 rounded-lg py-2" + " " + style}>
                        <img className='w-20 mx-auto' src={src} alt={title}/>
                        <p>{title}</p>
                    </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Experience