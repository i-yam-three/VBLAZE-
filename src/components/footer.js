// import { motion } from 'framer-motion'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
// import { fadeIn } from '../variants'
import Logo from '../assets/image.png'
function footer() {
  return (
    <div className='w-full bg-purple-900 h-[110px] backdrop-blur-2xl 
     mx-auto px-5 flex justify-between items-center text-2xl text-white/50"'>
         <div className='flex justify-between items-center'>
        <a href='#'>
          <img className='h-[50px]' src={Logo} alt=''/>
        </a>
       
      </div>
         <div  className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="https://github.com/VBLAZE-STM">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/company/vblaze-edu/">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/vblaze_stm/">
                <FaInstagram/>
              </a>
            </div>

    </div>
  )
}

export default footer