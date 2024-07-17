import React, { useEffect } from 'react';
import './Navbar.css';
import { navTabs } from '../../data';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { RiMenu3Fill } from 'react-icons/ri';
import Logo from '../Logo/Logo';
import { gsap } from 'gsap';

const Navbar = () => {
  const [visible, setVisible] = React.useState(false);
  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;
    if(currentScrollPosition > 145) {
      return setVisible(true);
    }
    setVisible(false);
  };
  useEffect(() => {window.addEventListener("scroll",handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {if(visible){
    if(visible){
      gsap.fromTo('.navbar', {y: '-250'}, {y: 0,top:0, duration: 0.5, ease: 'power4.out'})
    }
  }},[visible]);
  return (
    <nav className={`navbar ${visible? 'visible':''}`}>
      <Logo></Logo>
      <div className="box nav__tabs">
        <div className="icon__container cancel__btn">
          <FaTimes />
        </div>
        {/* <div className="logo">OMDESIGN</div> */}
        {navTabs.map((tab, index) => (
          <Link 
            to={tab.id} 
            className='tab' 
            key={index}
            activeClassName="active"
            smooth="true" 
            spy="true"
            offset={-60}
          >
            <p>{tab.name}</p>
          </Link>
        ))}
      </div>
      <div className="box">
        <Link to='contact' className='btn contact__btn'>Contact Us</Link>
        <div className="icon__container menu__btn">
          <RiMenu3Fill />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
