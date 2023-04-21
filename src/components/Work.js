import { motion } from 'framer-motion';
import React from 'react';

import Ignite from "../assets/projects/ignite.png";
import IEDC from "../assets/projects/IEDC.png";
import { fadeIn } from '../variants';
import {  Link } from "react-router-dom";

const Work = () => {
  return (
  <div className='section mt-40  ' id='work'>
   
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
          variants={fadeIn('right',0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.3}} 
           className='flex-1 flex justify-start items-center'>
            <div >
              <h2 className='h2 leading-tight text-accent'>our  works</h2>
              <p className='max-w-sm mb-16'>We as a Web Design Club are always ready to contribute to the growth of your company by offering a fully functional and appealing web solution,
              </p>
            <Link to='/projects'>
             <button  className='btn btn-sm'>view all projects</button></Link>
            </div>
           
          </motion.div>
          <motion.div 
          variants={fadeIn('down',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.3}} 
          className='flex-1 flex-col flex gap-y-10 py-10'>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={IEDC} alt="" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>
                WEBPAGE
                  </span> 
                  
                </div>
              
              <div className='absolute -bottom-full left-12 
              group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>IEDC-STM</span>
              </div>
              <div className='absolute -bottom-full right-12 
              group-hover:bottom-14 transition-all duration-700 z-50'>
              <a href="https://www.stthomaskannur.ac.in/stm2/IEDC/" className="text-gradient btn-link" target="_blank">
                view
              </a>
              </div>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={Ignite} alt="" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>
               WEBPAGE
                  </span> 
                </div>
              
              <div className='absolute -bottom-full left-12 
              group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>IGNITE-2K22</span>
              </div>
              <div className='absolute -bottom-full right-12 
              group-hover:bottom-14 transition-all duration-700 z-50'>
              <a href="https://www.stthomaskannur.ac.in/ignite2022/" className="text-gradient btn-link" target="_blank">
                view
              </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
  
  </div>
)}
export default Work;
