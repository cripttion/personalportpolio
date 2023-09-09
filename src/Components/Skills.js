import React from 'react'
import Title from './Title'
import SkillCard from './SkillCard'
import ProgressBar from "@ramonak/react-progress-bar";

function Skills() {
  return (
    <div className='mt-32' id='skill'>
        <Title title="SKILLS"
               titleBack="MY SKILLS" />
        <div className='skill flex flex-col md:flex-row sm:flex-col xl:flex-row gap-20  justify-center mt-20'>
            <SkillCard
                value='90'
                text="Languages" />   
                <SkillCard
                value='80'
                text="Front-End" /> 
                <SkillCard
                value='70'
                text="Back-End" /> 
                <SkillCard
                value='50'
                text="Mobile Development" /> 
        </div>
       <div className='SkillLIst grid grid-rows-1 md:grid-cols-2 gap-10 mx-3 md:mx-20 mt-10 text-white text-xl font-bold'>
       <div>
        Java
        <ProgressBar completed={95} bgColor='rgb(94,234,212)' labelColor='black'/>
        </div>
       <div>
        Python
        <ProgressBar completed={80} bgColor='rgb(94,234,212)' labelColor='black'/>
        </div>

        <div>
        JavaScript
        <ProgressBar completed={60} bgColor='rgb(94,234,212)' labelColor='black'/>
        </div>
       <div>
        HTML & CSS
        <ProgressBar completed={95} bgColor='rgb(94,234,212)' labelColor='black'/>
        </div>
       <div>
        React.JS
        <ProgressBar completed={75} bgColor='rgb(94,234,212)' labelColor='black'/>
        </div>
        <div>
        TailwindCSS/Bootstrap
        <ProgressBar completed={80} bgColor='rgb(94,234,212)' labelColor='black'/>
        </div>

        <div>
        Node.js
        <ProgressBar completed={70} bgColor='rgb(94,234,212)' labelColor='black'/>
        </div>
       <div>
        MongoDB
        <ProgressBar completed={80} bgColor='rgb(94,234,212)' labelColor='black'/>
        </div>
        <div>
        SQL
        <ProgressBar completed={85} bgColor='rgb(94,234,212)' labelColor='black'/>
        </div>

        <div>
        React-Native
        <ProgressBar completed={60} bgColor='rgb(94,234,212)' labelColor='black'/>
        </div>

        


       </div>
    </div>
  )
}

export default Skills