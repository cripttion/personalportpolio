import React from 'react'

function NavBar() {
  return (
    <div className='border-b'>
        <header style={{backgroundColor:'#13142E'}}>
  <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div className="flex lg:flex-1">
    
         <p className='font-bold text-teal-300 text-4xl '>PULAK<span className='bold'>.</span></p>
      
    </div>

    <div className="hidden lg:flex lg:gap-x-12">
      
    <a href="#" className="text-sm font-semibold leading-6 text-gray-900 text-white">HOME</a>

      <a href="#" className="text-sm font-semibold leading-6 text-gray-900 text-white">ABOUT</a>
      <a href="#" className="text-sm font-semibold leading-6 text-gray-900 text-white">RESUME</a>
      <a href="#" className="text-sm font-semibold leading-6 text-gray-900 text-white">WORKS</a>
      <a href="#" className="text-sm font-semibold leading-6 text-gray-900 text-white">BLOG</a>
      <a href="#" className="text-sm font-semibold leading-6 text-gray-900 text-white">CONTACT</a>


    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
    
    <button className='bg-teal-300 text-black p-2 rounded-sm'>HIRE ME</button>
      {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">HIREME <span aria-hidden="true">&rarr;</span></a> */}
    </div>
  </nav>

</header>

    </div>
  )
}

export default NavBar