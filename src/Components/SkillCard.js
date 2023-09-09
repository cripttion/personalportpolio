import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function SkillCard(props) {
    const percentage = 60;
  return (
   
    <div>
        <div className='SkillCard w-fit bg-slate-600 h-auto p-10'>
         <div style={{width:100,height:100}}>
                <CircularProgressbar
                  value={props.value}
                  text={`${props.value}%`}
                  styles={buildStyles({
                    textSize: '16px',
                    // Colors
                    pathColor: `rgb(94 234 212)`,
                    textColor: 'white',
                   
                  })}
                />
           </div>
        </div>
    </div>
  )
}

export default SkillCard