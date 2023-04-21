import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { fadeIn } from '../variants';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Modal from 'react-modal';
import { FaCheckCircle,
  // FaTimes
} from "react-icons/fa";
// import { Link } from 'react-router-dom';


// email.js url : https://dashboard.emailjs.com/admin

const Contact = () => {
  const form = useRef();
  // const [isSuccess, setIsSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ui3ihhx', 'template_jya1hkh', form.current, 'L91ssenjfEiKoRoyB')
      .then((result) => {
          console.log(result.text);
          
          // setIsSuccess(true);
          e.target.reset();
          setShowModal(true); // show modal on success

      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section className='mt-40  lg:section ' id='contact'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          <motion.div
           variants={fadeIn('right',0.3)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once:false,amount:0.3}}
           className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium 
              mb-2 tracking-wide '>get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] 
              leading-none mb-12'>let's work <br /> together</h2>
            </div>
          </motion.div>
         <motion.form
         ref={form} onSubmit={sendEmail}
          variants={fadeIn('left',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.3}}
           className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start' action="">
         <input className='bg-transparent border-b py-3  outline-none w-full transition-all  placeholder:text-white focus:border-accent' 
         
         type="text" name="user_name" placeholder='your name'  />

         <input className='bg-transparent border-b py-3  outline-none w-full transition-all placeholder:text-white focus:border-accent'

          type="text" name="user_email" placeholder='your email'  />

        <textarea className='bg-transparent border-b py-12 outline-none w-full transition-all  placeholder:text-white focus:border-accent resize-none mb-12' 

         type="text" name="message" placeholder='your message'  >

         </textarea>

         <button className='btn btn-lg' value="Send"  >send message</button>
         <Modal
  isOpen={showModal}
  onRequestClose={() => setShowModal(false)}
  className="Modal absolute z-50 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-black  rounded-lg p-6 shadow-lg"
  overlayClassName="Overlay fixed inset-0 bg-gray-500 opacity-75"
>
  <div className="w-96 mx-auto">
    <div className="rounded-full border border-green-500 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto mb-4">
      <i className="text-green-500 text-3xl">
        <FaCheckCircle />
      </i>
    </div>
    <h2 className="text-2xl text-center text-white-700 font-medium mb-4">Success!</h2>
    <p className="text-lg text-white-700 mb-4">
      Thank you for contacting us! We have received your message and will get back to you as soon as possible. Your input is valuable to us and we appreciate your interest in our business.
    </p>
    <div className="flex justify-center">
      <button
        className="btn w-50 h-0 p-1 mb-5"
        onClick={() => {
          setShowModal(false);
          //  window.location.reload(); 
          // reload the page to clear the form
        }}
      >
        {/* <FaTimes/> */}
        close
      </button>
      {/* <Link to="/contact">
        <button className="btn btn-secondary">home</button>
      </Link> */}
    </div>
  </div>
</Modal>
        
         {/* {isSuccess && (
              <p className='text-green-500 mt-4'>
                Your message has been sent successfully.
              </p>
            )} */}
         
         </motion.form>
        </div>
      </div>
    </section>
  )
};


export default Contact;