import React from 'react'
import Title from './Title'
import SkillCard from './SkillCard'

function Skills() {
  return (
    <div className='mt-32'>
        <Title title="SKILLS"
               titleBack="MY SKILLS" />
        <div className='skill grid md:grid-cols-4 sm:grid-cols-1'>
            <SkillCard
                value='90' />   
        </div>
    </div>
  )
}

export default Skills