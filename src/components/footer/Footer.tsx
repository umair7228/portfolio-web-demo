import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logo/circle-transpanrent.png'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-[80%] rounded-full z-50 py-8 mb-10'>
      <div className='flex items-center justify-between p-2 bg-yellow-500 rounded-full '>
        {/* logo div  */}
        <Link href={'/'} className='flex items-center gap-3'>
            <Image
                src={logo}
                alt='Logo'
                className='w-10 h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16'
            />
            <span className='text-2xl md:text-3xl xl:text-4xl font-bold text-black/80'>UMAIR</span>
        </Link>

        {/* menu button */}
        <p className='text-black font-bold mr-2 md:mr-6 text-xl'>Contact Me</p>
      </div>
    </footer>
  )
}

export default Footer
