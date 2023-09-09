import React from 'react'
import Title from './Title'
import PathLine from './PathLine'
import PathLine2 from './PathLine2'

function Resume() {
  return (
    <div className='mt-32' id='resume'>
      <Title
         title="RESUME"
         titleBack="MY RESUME" />
      <div className='ResumeDetails grid grid-cols-1 md:grid-cols-2 mx-0 md:mx-96 mt-20 gap-20 md:gap-96' >
        <div className='EducationalDetails relative'>
        <PathLine />
            <div className='SecondayEducationYear text-white mt absolute -left-24  bg-gray-900 pl-3 pr-3 pt-2 pb-2 rounded-full'style={{top:'8px'}}>2018</div>
            <div className='SecondayEductionDetails absolute left-10' style={{top:'8px'}}>
                <h2 className='text-teal-300 font-bold text-3xl'>Seconday School</h2>
                <p className='text-white'>Jeewan Public School</p>
                <p className='text-zinc-500'>Percantage: 88.5</p>
            </div>

            <div className='HighEducationYear text-white mt absolute -left-36  bg-gray-900 pl-3 pr-3 pt-2 pb-2 rounded-full' style={{top:'170px'}}>2018-2020</div>
            <div className='HighEductionDetails absolute  left-10 ' style={{top:'170px'}}>
                <h2 className='text-teal-300 font-bold text-3xl'>High School</h2>
                <p className='text-white'>Jeewan Public School</p>
                <p className='text-zinc-500'>Percantage: 81.5</p>
            </div>


            <div className='GraduationEducationYear text-white mt absolute -left-36  bg-gray-900 pl-3 pr-3 pt-2 pb-2 rounded-full' style={{top:'305px'}}>2020-2024</div>
            <div className='GraduationEductionDetails absolute  left-10 ' style={{top:'305px'}}>
                <h2 className='text-teal-300 font-bold text-3xl'>Bachelor in technology</h2>
                <small className='text-white'>Computer Science and Engineering</small>
                <p className='text-white'>Galgotias University</p>
                <p className='text-zinc-500'>CGPA: 8.85</p>
            </div>
            
        
        </div>
        <div>
          <div className='ExperienceDetails relative'>
                <PathLine2 />
                <div className='SecondayEducationYear text-white mt absolute  bg-gray-900 pl-3 pr-3 pt-2 pb-2 rounded-full'style={{top:'8px' , left:'-260px'}}>May 2023 - September 2023</div>
                  <div className='SecondayEductionDetails absolute left-10' style={{top:'8px'}}>
                <h2 className='text-teal-300 font-bold text-3xl'>Full-Stack-Developer Intern</h2>
                <p className='text-white'>Homznoffiz pvt. Ltd.</p>
                <p className='text-zinc-100 '>Banglore, India</p>
                <ul className=' ml-5 text-zinc-500 list-disc list-outside marker:text-teal-300'>
                    <li>Worked on the Company Website Project with collboration of 3 members.</li>
                    <li>Created the functonality to Escrow the page and contact the Agents smoothly.</li>
                    <li>Developed functonality increase the user experice by 30-35%</li>
                    <li>Worked on javascript Front-end libaries like React.js and TailwindCss</li>
                </ul>
            </div>
            <div className='SecondayEducationYear text-white mt absolute  bg-gray-900 pl-3 pr-3 pt-2 pb-2 rounded-full'style={{top:'350px' , left:'-260px'}}>May 2023 - September 2023</div>
                  <div className='SecondayEductionDetails absolute left-10' style={{top:'350px'}}>
                <h2 className='text-teal-300 font-bold text-3xl'>Full-Stack Developer Intern</h2>
                <p className='text-white'>AidCom It Services And Solutions</p>
                <p className='text-zinc-100 '>Bettiah, India</p>
                <ul className=' ml-5 text-zinc-500 list-disc list-outside marker:text-teal-300'>
                    <li>Worked on the Company Website Project with collboration of 3 members.</li>
                    <li>Created the multiple role login signup system.</li>
                    <li>Developed Tokenized the user login data transmission system to secure flow of data </li>
                    <li>used teach stack are  React.js,Node.js,Express.js,MongoDB</li>
                </ul>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume