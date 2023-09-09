import React from 'react'
import { Link } from 'react-router-dom';
function WorkCard(props) {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    const Baseurl='https://stackoverflow.com/questions/75728532/uncaught-typeerror-cannot-destructure-property-basename-of-react2-usecontext';
    }
    const txt="<code />"
  return (
    <div className='works w-fit max-w-sm h-xl p-10 rounded-xl   border border-gray-700' style={{backgroundColor:'rgb(19,20,46)'}}>
        <img src={props.url} alt='typpeMe' className='rounded-md' />
        <p className='text-white text-3xl text-center p-2 mt-4'>{props.projectName}</p>
        <div className='grid grid-cols-2 md:grid-cols-2 gap-4 mt-4'>
            <button className='bg-zinc-600 text-white border border-gray-400 rounded-xl p-2 hover:bg-teal-300 hover:text-black' role='link' onClick={()=>openInNewTab(props.githuburl)}>{txt}</button>
            <button className='bg-zinc-600 text-white border border-gray-400 rounded-xl p-2 hover:bg-teal-300 hover:text-black' role='link' onClick={()=>openInNewTab(props.visitUrl)}>Visit</button>
        </div>
    </div>
  )
}

export default WorkCard