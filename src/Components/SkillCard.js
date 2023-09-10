import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function SkillCard(props) {
  return (
   
    <div>
        <div className='SkillCard w-96 h-64 p-10 rounded-xl flex justify-center border border-gray-700' style={{backgroundColor:'rgb(19,20,46)'}}>
         <div style={{width:120,height:100}}>
                <CircularProgressbar
                  value={props.value}
                  text={`${props.value}%`}
                  styles={buildStyles({
                    textSize: '28px',
                    // Colors
                    pathColor: `rgb(94 234 212)`,
                    textColor: 'white',
                   
                  })}
                />
                <p className='text-white text-center mt-5 text-lg '>{props.text}</p>
           </div>
          
        </div>
    </div>
  )
}

export default SkillCard