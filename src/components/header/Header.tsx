"use client";
import Image from 'next/image';
import React from 'react';
import logo from '../../../public/logo/circle-transpanrent.png';
import menu from '../../../public/logo/menu-icon.svg';
import { Button } from '../ui/button';
import Link from 'next/link';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className='w-full max-w-[80%] mx-auto rounded-full z-50 py-4 sm:py-6 md:py-8 lg:py-10 animate-top-to-bottom'>
      <nav className='flex items-center justify-between p-2 bg-white/95 rounded-full shadow-lg'>
        {/* Logo Div */}
        <Link href={'/'} className='flex items-center gap-2 sm:gap-3'>
          <Image
            src={logo}
            alt='Logo'
            className='w-8 h-8 md:w-12 md:h-12 2xl:w-16 2xl:h-16'
          />
          <span className='text-2xl md:text-3xl 2xl:text-4xl font-bold text-black/80'>
            UMAIR
          </span>
        </Link>

        {/* Menu */}
        <Sheet>
          <SheetTrigger>
            {/* Menu Button */}
            <div className='flex items-center rounded-full bg-black h-full pl-4 sm:pl-6 md:pl-8 border-none hover:bg-[#FEB901] transition duration-300'>
              <p className='flex items-center gap-2 sm:gap-4 text-white h-full'>
                <span className='text-lg sm:text-2xl'>Menu</span>
                <Image
                  src={menu}
                  alt='Menu'
                  className='bg-[#FEB901] p-2 sm:p-3 w-8 sm:w-12 rounded-full'
                />
              </p>
            </div>
          </SheetTrigger>

          <SheetContent className='bg-transparent backdrop-blur-sm border-yellow-500 rounded-tl-3xl text-white'>
            <SheetHeader>
              <SheetTitle className='text-white mt-6 border-b border-white/60 pb-4'>
                {/* Logo Div */}
                <Link href={'/'} className='flex items-center gap-3'>
                  <Image
                    src={logo}
                    alt='Logo'
                    className='w-10 h-10 sm:w-12 sm:h-12'
                  />
                  <span className='text-xl sm:text-3xl font-bold text-white/85'>
                    UMAIR
                  </span>
                </Link>
              </SheetTitle>
              <SheetDescription className='text-white text-start'>
                <ul className="flex flex-col p-4 space-y-3 text-sm sm:text-base">
                  <li className="hover:text-[#FEB901] hover:underline transition duration-300">
                    <SheetClose asChild>
                      <Link href="/">Home</Link>
                    </SheetClose>
                  </li>
                  <li className="hover:text-[#FEB901] hover:underline transition duration-300">
                    <SheetClose asChild>
                      <Link href="#">About Me</Link>
                    </SheetClose>
                  </li>
                  <li className="hover:text-[#FEB901] hover:underline transition duration-300">
                    <SheetClose asChild>
                      <Link href="#">Education</Link>
                    </SheetClose>
                  </li>
                  <li className="hover:text-[#FEB901] hover:underline transition duration-300">
                    <SheetClose asChild>
                      <Link href="#">Experience</Link>
                    </SheetClose>
                  </li>
                  <li className="hover:text-[#FEB901] hover:underline transition duration-300">
                    <SheetClose asChild>
                      <Link href="#">Certificates</Link>
                    </SheetClose>
                  </li>
                  <li className="hover:text-[#FEB901] hover:underline transition duration-300">
                    <SheetClose asChild>
                      <Link href="#">Skills</Link>
                    </SheetClose>
                  </li>
                  <li className="hover:text-[#FEB901] hover:underline transition duration-300">
                    <SheetClose asChild>
                      <Link href="#">Projects I&apos;ve Worked On</Link>
                    </SheetClose>
                  </li>
                  <li className="hover:text-[#FEB901] hover:underline transition duration-300">
                    <SheetClose asChild>
                      <Link href="#">Contact Me</Link>
                    </SheetClose>
                  </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Header;
