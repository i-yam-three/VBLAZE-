import { motion } from 'framer-motion';
import React from 'react';

import { fadeIn } from '../variants';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from '../components/Header';

import {Prodata} from "../ProjectData";
const Work = () => {
  return (
  <div  className='bg-site   '>
   <Header/>

   
   
      <div className="container mx-auto">
        <div className='lg:flex-row gap-x-10'>
          <motion.div
          variants={fadeIn('right',0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.3}} 
           className='container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10'>
            
            
		<h2 className="h2 text-accent text-center ">our  works</h2>
		<p className="max-w-2xl text-center">We as a Web Design Club are always ready to contribute to the growth of your company by offering a fully functional and appealing web solution,</p>
		
		
              {/* <Link to='/'  className='btn btn-sm'>view all projects</Link> */}
            
          
          </motion.div>
          
          <div 
          // variants={fadeIn('down',0.3)}
          // initial='hidden'
          // whileInView={'show'}
          // viewport={{once:false,amount:0.3}}
           className='grid grid-cols-1 lg:grid-cols-2 grid-flow-row gap-10 mt-20 pb-20'>
         {Prodata.map((item) => (
          <div className=' group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={item.img} alt="" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>
                {item.title}
                  </span> 
                  
                </div>
              
              <div className='absolute -bottom-full left-12 
              group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>{item.name}</span>
              </div>
              <div className='absolute -bottom-full right-12 
              group-hover:bottom-14 transition-all duration-700 z-50'>
              <a href={item.src} className="text-gradient btn-link" target="_blank">
                view
              </a>
              </div>
            </div>
            
          ))}
          </div>
        </div>
      </div>
  
  </div>
)}
export default Work;
