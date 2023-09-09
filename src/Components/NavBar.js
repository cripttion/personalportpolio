import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
function NavBar() {
  return (
    <div className='border-b fixed w-full z-20'>
        <header style={{backgroundColor:'#13142E'}}>
  <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div className="flex lg:flex-1">
    
         <p className='font-bold text-teal-300 text-4xl '>PULAK<span className='bold'>.</span></p>
      
    </div>

    <div className="hidden lg:flex lg:gap-x-12">
      
    <Link to="#home" className="text-sm font-semibold leading-6 text-gray-900 text-white">HOME</Link>

      <Link to="#about" className="text-sm font-semibold leading-6 text-gray-900 text-white">ABOUT</Link>
      <Link to="#skill" className="text-sm font-semibold leading-6 text-gray-900 text-white">Skills</Link>
      <Link to="#resume" className="text-sm font-semibold leading-6 text-gray-900 text-white">RESUME</Link>
      <Link to="#work" className="text-sm font-semibold leading-6 text-gray-900 text-white">WORKS</Link>

      <Link to="#contact" className="text-sm font-semibold leading-6 text-gray-900 text-white">CONTACT</Link>


    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
    
    <button className='bg-teal-300 text-black p-2 rounded-sm'>HIRE ME</button>
      {/* <a to="#" className="text-sm font-semibold leading-6 text-gray-900">HIREME <span aria-hidden="true">&rarr;</span></a> */}
    </div>
  </nav>

</header>

    </div>
  )
}

export default NavBar