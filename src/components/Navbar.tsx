import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full bg-[#111111] h-20 flex'>

        <ul className='flex items-center justify-center mx-auto gap-8 text-[#ffcb74] text-2xl '>
            <li>Balance: <span className='text-white'>XXX</span></li>
            <li>Bet: <span className='text-white'>XXX</span></li>
            <li>Win: <span className='text-white'>XXX</span></li>
        </ul>
    </div>
  )
}

export default Navbar