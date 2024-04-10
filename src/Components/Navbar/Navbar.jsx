import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [mobileMenu,setMobileMenu] = useState(false);
  const toggleMenu = () =>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src="../../public/photos/logo.png" alt="logo" className="logo" />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li >
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-260} duration={500} className="btn">
            Contact us
          </Link>
        </li>
      </ul>
      <img src="../../public/photos/menu-icon.png" alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  );
}

export default Navbar;
