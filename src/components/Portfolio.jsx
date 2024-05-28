import React from 'react'
import training from "../assets/training-1-1024x691.jpg"
import reporting from "../assets/data-visualization.jpg"

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: training,
            title: 'Movies Review and Rating System',
            demourl: '',
            codeurl: ''
        },
        {
            id: 2,
            src: reporting,
            title: 'Portfolio Website',
            demourl: '',
            codeurl: ''
        }
    ]
    
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 text-white w-full md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">Portfolio</p>
                <p className='py-3'>Check out my work right here!</p>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8 py-4 px-12 sm:px-0'>
                {
                    portfolios.map(({id, src, title, demourl, codeurl }) => (
                        <div className='shadow-md shadow-gray-600 rounded-lg'>
                            <img key={id} src={src} alt='' className='rounded-md duration-200 hover:scale-105'></img>
                            <p className='flex items-center justify-center mt-2'>{title}</p>
                            <div className='flex items-center justify-center'>
                                <button className='w-1/2 px-6 ml-4- mr-4 mb-2 mt-2 duration-200 hover:scale-105' onClick={() => {
                                    if(demourl) {
                                        window.open(demourl, '_blank')
                                    }
                                }
                                }>Demo</button>
                                <button className='w-1/2 px-6 ml-4- mr-4 mb-2 mt-2 duration-200 hover:scale-105' onClick={() => {
                                    if(codeurl) {
                                        window.open(codeurl, '_blank')
                                    }
                                }
                                }>Code</button> 
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Portfolio