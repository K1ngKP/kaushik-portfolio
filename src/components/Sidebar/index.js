 import './index.scss'
 import { useState } from 'react'
 import LogoS from '../../assets/images/logo-s.png'
 import LogoSubtitle from '../../assets/images/logo_sub.png'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import {faHome, faUser, faEnvelope, faGraduationCap, faBars, faClose, faSuitcase} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
   const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
       <Link 
        className="logo"
        to="/"
        onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
      </Link>
      
       <nav className={showNav ? 'mobile-show' : ''}>
         <NavLink 
           exact="true"
           activeclassname="active" 
           to="/"
           onClick={() => setShowNav(false)}>
           <FontAwesomeIcon icon={faHome} color="#EDF5E1" />
         </NavLink>
         <NavLink 
           exact="true"
           activeclassname="active"
           className="about-link"
           to="/about"
           onClick={() => setShowNav(false)}>
           <FontAwesomeIcon icon={faUser} color="#EDF5E1" />
         </NavLink>
         <NavLink 
           exact="true"
           activeclassname="active"
           className="about-grad"
           to="/education"
           onClick={() => setShowNav(false)}>
           <FontAwesomeIcon icon={faGraduationCap} color="#EDF5E1" />
         </NavLink>
         {/* <NavLink 
           exact="true"
           activeclassname="active"
           className="about-dash"
           to="/dashboard"
           onClick={() => setShowNav(false)}>
           <FontAwesomeIcon icon={faSuitcase} color="#EDF5E1" />
         </NavLink> */}
         <NavLink 
           exact="true"
           activeclassname="active"
           className="about-contact"
           to="/contact"
           onClick={() => setShowNav(false)}>
           <FontAwesomeIcon icon={faEnvelope} color="#EDF5E1" />
         </NavLink>
         
         <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#f64c72"
          size="3x"
          className='close-icon' />
         </nav>
          <ul>
            <li>
              <a 
              target='_blank' 
              rel='noreferrer' 
              href='https://www.linkedin.com/in/kaushik-pattnaik-3a7986228'
              >
                <FontAwesomeIcon icon={faLinkedin} color="#EDF5E1" />
              </a>
            </li>
            <li>
              <a 
              target='_blank' 
              rel='noreferrer' 
              href='https://github.com/K1ngKP'
              >
                <FontAwesomeIcon icon={faGithub} color="#EDF5E1" />
              </a>
            </li>
          </ul>
          <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#f64c72"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
 }

 export default Sidebar
