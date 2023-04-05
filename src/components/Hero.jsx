import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex flex-col-reverse h-[100%]] w-[100vw] sm:grid sm:grid-flow-col sm:grid-cols-2 sm:px-[10%] sm:py-[5%] sm:gap-x-[10%]'>
        <div className='w-full h-100 my-14 flex flex-col gap-6 items-center sm:items-start text-center justify-between sm:text-left sm:m-0 sm:pt-[15%]'>
            <h1 className='text-black font-bold leading-none header_title '>Make remote work</h1>
            <p className='p_font font-medium text-base leading-7 text-neutral-500'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
            <Link className='mt-2'  href='/'>
                <button className='bg-black p-4 text-white header_p font-medium px-8 py-4 rounded-2xl hover:bg-white hover:border
                hover:border-black hover:text-black'>Learn More</button>
            </Link>
            <div className='flex w-full justify-between mt-6 p-3 '>
                <figure>
                    <img src="/client-databiz.svg" alt="databix logp" />
                </figure>
                <figure>
                    <img src="/client-audiophile.svg" alt="auidophile logo" />
                </figure>
                <figure>
                    <img src="/client-meet.svg" alt="meet" />
                </figure>
                <figure>
                    <img src="/client-maker.svg" alt="maker" />
                </figure>
            </div>
        </div>
        <div className='relative'>
            <Image src="/image-hero-desktop.png" width={500} height={500} className='hidden sm:block object-cover' />
            <Image src="/image-hero-mobile.png" width={500} height={500} className='block sm:hidden object-cover' />
        </div>
    </div>
  )
}

export default Hero