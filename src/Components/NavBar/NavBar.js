import React from 'react'
import './NavBar.css';
import { useEffect,useState } from 'react';



function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);   
  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix logo"/>
       <div className='caption'>
       <p className='caption1'>TV Shows</p>
       <p className='caption2'>Movies</p>
       <p className='caption3'>Recently Added</p>
       <p className='caption4'>My List</p>
       </div>
       <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar"/>
    </div>
  )
}

export default NavBar
