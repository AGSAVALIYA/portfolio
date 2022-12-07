import React from 'react'
import {BsGithub, BsLinkedin} from 'react-icons/bs'

const Sidebar = () => {
  return (
    <div className='w-fit text-p-main container flex flex-col items-start bg-p-black'>
      <p className='text-4xl font-bold p-5 pb-0 tracking-widest w-full text-p-main pr-16'>Swaraj</p>
      <div className='pt-5 flex flex-col flex-1 w-full'>
        {/*<a href="#about" className='transition-all ease-linear duration-300 delay-0 text-base pb-3 hover:bg-p-main/10 px-4 py-3'>About</a>*/}
        <a href="#skills" className='transition-all ease-linear duration-300 delay-0 text-base pb-3 hover:bg-p-main/10 px-4 py-3'>Skills</a>
        <a href="#proects" className='transition-all ease-linear duration-300 delay-0 text-base pb-3 hover:bg-p-main/10 px-4 py-3'>Proects</a>
        <a href="#certificates" className='transition-all ease-linear duration-300 delay-0 text-base pb-3 hover:bg-p-main/10 px-4 py-3'>Certificates</a>        
      </div>
      <div className='flex p-5 text-2xl justify-evenly w-full'>
        <a className='transition-all hover:scale-125 ease-linear' href='https://www.linkedin.com/in/swaraj-dusane-35941722b/' target="blank">
          <BsLinkedin/>
        </a>
        <a className='transition-all hover:scale-125 ease-linear' href='https://github.com/Swaraj9' target="blank">
          <BsGithub/> 
        </a>
      </div>
    </div>
  )
}

export default Sidebar