import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">About</p>
            </div>
            
            <p className="text-xl mt-15">Proficient in HTML, CSS, JavaScript, and Bootstrap for building responsive websites. Experienced in using React for front-end development and Node.js for back-end development.
              Experience in working with RESTful APIs, enabling seamless integration of data and services across platforms.
              Excellent communication and teamwork skills, with experience in collaborating with cross-functional teams to achieve project goals. 
            </p>
            <br />

            {/* <p className="text-xl">
            Proficient in using Git to manage and track changes in code, making collaboration with teammates easier. Experienced in finding and fixing issues in the code to improve the overall quality of applications. Worked on HTML, CSS, and JavaScript to create attractive and user-friendly websites.
            </p> */}
        </div>
    </div>
  )
}

export default About;
