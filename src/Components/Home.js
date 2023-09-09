import React from 'react'
import profileImg from '../assests/Images/profileImg.jpeg';
import { TypeAnimation } from 'react-type-animation';
import bgimage from '../assests/Images/bgHome.png'

import { AiFillLinkedin,AiFillGithub,AiFillTwitterCircle,AiFillInstagram,AiOutlineArrowDown } from 'react-icons/ai';
function Home() {
  return (
    
    <div className='Hmain' id='home'>
        
        <div className='flex justify-center'>
            <div className='profileImage border-8 border-teal-300 mt-52'>
                <img  src={profileImg} alt='profile-Image'  className='self-center'/>
               
            </div>
            
        </div>
    
    
        <div className='TypedElement text-teal-300 flex flex-row justify-center'>
      
        
        <p className='text-white' style={{fontSize:'3rem'}}>Hi, I am <TypeAnimation
                    sequence={[
                    "Pulak Raj",
                    1000,
                    "Cirpttion",
                    1000,
                    "Full-stack Developer",
                    1000,
                    "React-Native Developer",
                    1000,
                    ]}
                    speed={20}
                    repeat={Infinity}
                    cursor={true}
                    style={{ fontSize: '3rem',color:'rgb(94 234 212)'}}
                /></p>
                
  </div>
  <div className='Habout text-white flex justify-center'>
    <div className='w-1/2 mt-5'><p className='text-cener text-zinc-400'>I'm a versatile full-stack developer with a strong passion for crafting robust and user-centric web and mobile solutions. With expertise in front-end and back-end technologies, as well as React Native, I thrive on turning ideas into elegant, functional, and scalable digital experiences. Let's collaborate to bring your vision to life!</p>
    </div>
  </div>
  <div className='Links flex flex-row justify-center mt-20 text-4xl text-white gap-10'>
    <div className='LinkIcons border border-slate-600 p-3 rounded-xl'><a href='https://www.linkedin.com/in/pulak-cripttion/'><AiFillLinkedin /></a></div>
    <div  className='LinkIcons border border-slate-600 p-3 rounded-xl'><AiFillGithub /></div>
    <div className='LinkIcons border border-slate-600 p-3 rounded-xl'><AiFillTwitterCircle /></div>
    <div className='LinkIcons border border-slate-600  p-3 rounded-xl'><AiFillInstagram /></div>
  </div>

  <div className='ScrollDown flex justify-center text-slate-600 mt-40'>
        <span className='flex text-xl'><AiOutlineArrowDown className='border border-slate-600 rounded-full mr-2' /></span> <span>Scroll</span>
  </div>
  </div>
  )
}

export default Home