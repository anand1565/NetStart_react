import React from 'react';
import mainlogo from '../assets/logo.png';

const Header = () => {
  return (
    <div className='flex flex-wrap items-center justify-center'>
        <div>
            <img style={{height:'80px', width:'full'}} src={mainlogo} alt='NetStart Logo' />
        </div>
    </div>
  )
}

export default Header;