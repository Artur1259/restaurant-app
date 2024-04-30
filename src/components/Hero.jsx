import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] p-4 mx-auto'>
        <div className='max-h-[500px] relative'>
            <div className='absolute w-full h-full bg-black/40 max-h-[500px] flex flex-col justify-center pl-1'>
                <h1 className='text-blue-200 text-3xl sm:text-5xl md:6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
                <h1 className='text-blue-200 text-3xl sm:text-5xl md:6xl lg:text-7xl font-bold'> <span className='text-orange-500'>Foods</span> Delivered</h1>
            </div>
            <img src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" className='w-full max-h-[500px] object-cover'/>
        </div>
    </div>
  )
}

export default Hero