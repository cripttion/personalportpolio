import React, { useState } from 'react'
import Title from './Title'
import {AiOutlineMail,AiOutlinePhone } from 'react-icons/ai'

function Contact() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [subject,setSubject] = useState("");
  const [message,setMessage] = useState("");
  return (
    <div className='mt-32 mb-32' id='contact'>
      <Title title="CONTACT" titleBack="CONTACT CRIPTTION" />
      <div className='contactInfomation mx-0 md:mx-96 grid grid-cols-1 md:grid-cols-2 gap-20 mt-20' >
        <div className='contactinfo'>
        <p className='text-white text-3xl'> Contact Information</p>
        <small className='text-gray-500'>You can contact me to hire me, do business , want projects e.t.c</small>
           <div className='emailCard mt-10 flex gap-10 p-5 rounded-xl' style={{backgroundColor:'rgb(19,20,46)'}}>
              <AiOutlineMail className='text-teal-300 text-6xl mt-9 bg-zinc-600 p-2 rounded-full '/>
              <div className='flex flex-col text-white '>
                 <h2 className='text-4xl mt-2'>Contact On Email</h2>
                 <p className='mt-5'>pulakshri@gmail.com</p>
                 <p className='mt-2'>cripttion@gmail.com</p>
                
              </div>
           </div>

           <div className='phoneCard mt-10 flex gap-10 p-5 rounded-xl' style={{backgroundColor:'rgb(19,20,46)'}}>
              <AiOutlinePhone className='text-teal-300 text-6xl mt-9 bg-zinc-600 p-2 rounded-full '/>
              <div className='flex flex-col text-white '>
                 <h2 className='text-4xl mt-2'>Contact On Phone</h2>
                 <p className='mt-5'>+91-7061454800</p>
                 <p className='mt-2'>+91-8092864116</p>
                
              </div>
           </div>

        </div>


        <div className='form border   border-zinc-700 rounded-xl p-8' style={{backgroundColor:'rgb(19,20,46)'}}>
        <p className='text-white'>Name</p>
       <input value={name} onChange={(e)=>setName(e.target.value)} className='border border-zinc-700  rounded-sm p-2  text-white' placeholder='Enter your Name'/>
       <p className='text-white'>Email</p>
       <input value={email} onChange={(e)=>setEmail(e.target.value)} className='border border-zinc-700  rounded-sm p-2 text-white'/>
       <p className='text-white'>Subject</p>
       <input value={subject} onChange={(e)=>setSubject(e.target.value)} className='border border-zinc-700  rounded-sm p-2  text-white'/>
       <p className='text-white'>Message</p>
       <textarea  type="text" value={message} rows={8} onChange={(e)=>setMessage(e.target.value)} className='border border-zinc-700  rounded-sm p-2  text-white'/>
      <button className='text-black p-2 bg-teal-300 mt-4 rounded-sm'>Send Email</button>
    </div>


      </div>

   






    </div>
  )
}

export default Contact