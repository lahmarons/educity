import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import menu_icom from '../../assets/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

 useEffect(() => {
  window.addEventListener('scroll', () => {
    window.scrollY > 500 ? setSticky(true) : setSticky(false);
  });
}, []);
const [mobileMenu,setMobileMenu]=useState(false);
const toggleMenu=()=>{
  mobileMenu ? setMobileMenu(false):setMobileMenu(true);

}

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li> <Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='programs' smooth={true} offset={-250} duration={500}>Programs</Link></li>
        <li><Link to='campus' smooth={true} offset={-290} duration={0}>Campus</Link></li>
         <li><Link to='about' smooth={true} offset={-290} duration={0}>About</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-250} duration={500}>Testimonials</Link></li>
        <li><Link  to='contact' smooth={true} offset={-260} duration={500} className="btn">Contact Us</Link></li>
      </ul>
      <img src={menu_icom} onClick={toggleMenu} className='menu_icon' />
    </nav>
  );
};

export default Navbar;
