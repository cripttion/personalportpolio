import React from 'react'
import myImg from '../assests/Images/profileImg.jpeg';
import myresume from '../assests/Images/Resume.png'
function About() {
  return (
    <div className='text-white'id='about'>
        <div className='AboutHeading flex justify-center '>
          <div className='aboutFront text-5xl mt-3 bold  relative z-0'><p className='border-b-8 border-teal-300  p-4'>ABOUT ME</p></div>
          <div className='aboutBack  absolute text-9xl text-slate-600 -z-10 opacity-25 '><p>ABOUT</p></div>
        </div>
        <div className='AboutDes grid  md:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 mt-40 '>
          <div className='AboutImage'>
            <img className='border-8 border-teal-300 md:ml-96' src={myImg} width={300} height={100} alt='profile2'/>
          </div>
          <div className='About'><p className='text-5xl'>Hi, I am <span className='text-teal-300'>Pulak Raj</span></p>
            <ul className='list-disc list-inside marker:text-teal-300 text-2xl text-zinc-400 mt-10 '>
              <li className='mb-2'>First Name  : Pulak</li>
              <li className='mb-2'>Last Name  : Raj</li>
              <li className='mb-2'>Nationaliy  : Bhartiya</li>
              <li className='mb-2'>Languages  : English, Hindi </li>
              <li className='mb-2'>Address  : Noida, India</li>
              <li className='mb-2'>Freelance  : Available</li>
            </ul>
            
            <a href={myresume} download="Pulak_Raj_Resume" target='_blank' rel='noreferrer'>
            <button className='bg-teal-300 p-5 text-black rounded-xl mt-5 hover:bg-white'>Download Resume</button>
</a>
            
          </div>
        </div>
    </div>
  )
}

export default About