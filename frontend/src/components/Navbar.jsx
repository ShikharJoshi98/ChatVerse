import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between sticky top-0 px-10 py-5 bg-[#111827] text-white/90'>
      <h1 className='text-2xl font-[boldonse] tracking-wider font-semibold'>ChatVerse</h1>
      <button className='py-2 px-5 hover:scale-102 transition-all duration-300 font-semibold hover:bg-white/10 rounded-lg cursor-pointer border-2'>Sign In</button>
    </nav>
  )
}

export default Navbar