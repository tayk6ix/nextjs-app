import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Navbar = () => {
const [nav, setNav] = useState(false)
const[dropDown1, setDropDown1] = useState(false)
const[dropDown2, setDropDown2] = useState(false)

const handleNav = () => {
    setNav(!nav)
}

const handleDropDown1 = () => {
    setDropDown1(!dropDown1)
}

const handleDropDown2 = () => {
    setDropDown2(!dropDown2)
}

  return (
    <div className='flex justify-between sm:justify-normal gap-12 py-[2.3vh] px-[2.3vw]'>
        <figure >
            <img  src='logo.svg' alt='Logo' className='object-cover' />
        </figure>
        <div className='hidden sm:flex flex-row justify-between w-full'>
            <ul className=' text-neutral-400 font-medium flex flex-row gap-8 justify-between header_p'>
            {dropDown1 ? (
                            <li className='flex flex-col  gap-3 cursor-pointer relative' onClick={handleDropDown1}>
                            <div className='flex flex-row items-center gap-2'>
                                <button>Features</button>
                                <img className='w-[10px] h-[5px]' src="/icon-arrow-up.svg" alt="dropw_down_arrow" />
                            </div>
                            <ul className='absolute top-[150%] right-0 left-[-50%] bottom-0 w-fit h-fit p-4 flex flex-col gap-3 bg-white shadow-lg rounded-lg'>
                                <li className='flex flex-row items-center gap-2' >
                                    <img className='w-[17px] h-[17px]' src="/icon-todo.svg" alt="Todo List Icon" />
                                    <button>Todo List</button>
                                </li>
                                <li className='flex flex-row items-center gap-2' >
                                    <img className='w-[17px] h-[17px]' src="/icon-calendar.svg" alt="Calendar icon" />
                                    <button>Calendar</button>
                                </li>
                                <li className='flex flex-row items-center gap-2' >
                                    <img className='w-[17px] h-[17px]' src="/icon-reminders.svg" alt="Reminder Icon" />
                                    <button>Reminders</button>
                                </li>
                                <li className='flex flex-row items-center gap-2' >
                                    <img className='w-[17px] h-[17px]' src="/icon-planning.svg" alt="Planning Icon" />
                                    <button>Planning</button>
                                </li>
                            </ul>
                            </li>
                        ) : (
                            <li className='flex flex-row items-center gap-2 cursor-pointer' onClick={handleDropDown1}>
                                <button>Features</button>
                                <img className='w-[10px] h-[5px]' src="/icon-arrow-down.svg" alt="" />
                            </li>
                        )}
                        {dropDown2 ? (
                        <li className='flex flex-col  gap-3 cursor-pointer relative' onClick={handleDropDown2}>
                            <div className='flex flex-row items-center gap-2'>
                                <button>Company</button>
                                <img className='w-[10px] h-[5px]' src="/icon-arrow-up.svg" alt="dropw_down_arrow" />
                            </div>
                            <ul className='absolute top-[150%] right-0 left-[0%] bottom-0 w-max h-fit p-4 flex flex-col gap-3 bg-white shadow-lg rounded-lg'>
                                <li >
                                    <button>History</button>
                                </li>
                                <li >
                                    <button>Our Team</button>
                                </li>
                                <li >
                                    <button>Blog</button>
                                </li>
                            </ul>
                            </li>
                            )
                            : (
                            <li className='flex flex-row items-center gap-2 cursor-pointer' onClick={handleDropDown2}>
                                <button>Company</button>
                                <img className='w-[10px] h-[5px]' src="/icon-arrow-down.svg" alt="dropw_down_arrow" />
                            </li>
                            )}
                        
                        <li >
                            <button>Careers</button>
                        </li>
                        <li >
                            <button>About</button>
                        </li>

            </ul>
            <div className='hidden sm:block'>
                <Link href='/' className='text-gray-500 p-4'>Login</Link>
                <Link href='/' className='border border-gray-500 p-4 rounded-xl text-gray-500'>Register</Link>
            </div>
        </div>
            <div onClick={handleNav} className='sm:hidden z-10'>
                {nav ? (
                    <img className='cursor-pointer' src='/icon-close-menu.svg' alt='Close Menu'/>
                ): (
                    <img className='cursor-pointer' src='/icon-menu.svg' alt='Open Menu'/>
                )}
            </div>
            <div 
            className={
                nav
                ? 'text-neutral-400 font-medium absolute inset-0 w-screen h-screen bg-black/70 flex justify-end ease-in duration-300 z-[2]'
                : 'text-neutral-400 font-medium absolute inset-y-0 left-[-100%]  right-0 w-screen h-screen bg-black/70 flex justify-end ease-in duration-300 z-[2]'
            }>
                <div className='bg-white h-full w-1/2 px-5 header_p pt-[10vh] flex flex-col gap-6' >
                    <ul className='flex flex-col gap-4' >
                        {dropDown1 ? (
                            <li className='flex flex-col  gap-3 cursor-pointer' onClick={handleDropDown1}>
                            <div className='flex flex-row items-center gap-2'>
                                <button>Features</button>
                                <img className='w-[10px] h-[5px]' src="/icon-arrow-up.svg" alt="" />
                            </div>
                            <ul className='ml-7 flex flex-col gap-3'>
                                <li className='flex flex-row items-center gap-2' onClick={handleNav}>
                                    <img className='w-[17px] h-[17px]' src="/icon-todo.svg" alt="Todo List Icon" />
                                    <button>Todo List</button>
                                </li>
                                <li className='flex flex-row items-center gap-2' onClick={handleNav}>
                                    <img className='w-[17px] h-[17px]' src="/icon-calendar.svg" alt="Calendar icon" />
                                    <button>Calendar</button>
                                </li>
                                <li className='flex flex-row items-center gap-2' onClick={handleNav}>
                                    <img className='w-[17px] h-[17px]' src="/icon-reminders.svg" alt="Reminder Icon" />
                                    <button>Reminders</button>
                                </li>
                                <li className='flex flex-row items-center gap-2' onClick={handleNav}>
                                    <img className='w-[17px] h-[17px]' src="/icon-planning.svg" alt="Planning Icon" />
                                    <button>Planning</button>
                                </li>
                            </ul>
                            </li>
                        ) : (
                            <li className='flex flex-row items-center gap-2 cursor-pointer' onClick={handleDropDown1}>
                                <button>Features</button>
                                <img className='w-[10px] h-[5px]' src="/icon-arrow-down.svg" alt="" />
                            </li>
                        )}
                        {dropDown2 ? (
                        <li className='flex flex-col  gap-3 cursor-pointer' onClick={handleDropDown2}>
                            <div className='flex flex-row items-center gap-2'>
                                <button>Company</button>
                                <img className='w-[10px] h-[5px]' src="/icon-arrow-up.svg" alt="" />
                            </div>
                            <ul className='ml-7 flex flex-col gap-3'>
                                <li onClick={handleNav}>
                                    <img src="" alt="" />
                                    <button>History</button>
                                </li>
                                <li onClick={handleNav}>
                                    <img src="" alt="" />
                                    <button>Our Team</button>
                                </li>
                                <li onClick={handleNav}>
                                    <img src="" alt="" />
                                    <button>Blog</button>
                                </li>
                            </ul>
                            </li>
                            )
                            : (
                            <li className='flex flex-row items-center gap-2 cursor-pointer' onClick={handleDropDown2}>
                                <button>Company</button>
                                <img className='w-[10px] h-[5px]' src="/icon-arrow-down.svg" alt="" />
                            </li>
                            )}

                        
                        <li onClick={handleNav}>
                            <button>Careers</button>
                        </li>
                        <li onClick={handleNav}>
                            <button>About</button>
                        </li>
                    </ul>
                    <div className='flex flex-col '>
                        <button className='p-2' onClick={handleNav}>Login</button>
                        <button className='border p-2 rounded-xl' onClick={handleNav}>Register</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Navbar