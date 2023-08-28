 import './index.scss'
 import { useState } from 'react'
 import LogoS from '../../assets/images/logo-s.png'
 import LogoSubtitle from '../../assets/images/logo_sub.png'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import {faHome, faUser, faEnvelope, faGraduationCap} from '@fortawesome/free-solid-svg-icons'
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
           <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
         </NavLink>
         <NavLink 
           exact="true"
           activeclassname="active"
           className="about-link"
           to="/about"
           onClick={() => setShowNav(false)}>
           <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
         </NavLink>
         <NavLink 
           exact="true"
           activeclassname="active"
           className="about-grad"
           to="/education"
           onClick={() => setShowNav(false)}>
           <FontAwesomeIcon icon={faGraduationCap} color="#4d4d4e" />
         </NavLink>
         <NavLink 
           exact="true"
           activeclassname="active"
           className="about-contact"
           to="/contact"
           onClick={() => setShowNav(false)}>
           <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
         </NavLink>
         
         </nav>
          <ul>
            <li>
              <a 
              target='_blank' 
              rel='noreferrer' 
              href='https://www.linkedin.com/in/kaushik-pattnaik-3a7986228'
              >
                <FontAwesomeIcon icon={faLinkedin} color="#4d4de" />
              </a>
            </li>
            <li>
              <a 
              target='_blank' 
              rel='noreferrer' 
              href='https://github.com/K1ngKP'
              >
                <FontAwesomeIcon icon={faGithub} color="#4d4de" />
              </a>
            </li>
          </ul>
    </div>
  )
 }

 export default Sidebar
