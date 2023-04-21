import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/image.png'


const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
      
       <Link to='/'>
          <img className='h-[50px]' src={Logo} alt=''/>
        </Link>
        <Link to='/contact'>
        <button  className='btn btn-sm'> contact</button></Link>
      </div>

    </div>
  </header>;
};

export default Header;
