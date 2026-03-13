import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import logo from '../assets/logo.png';
import {Link} from 'react-scroll'
import '../style/Navbar.css'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='navbar'>
        <div>
          <img src={logo} alt="Logo Image" style={{width: '80px'}}/>
        </div>       
        <ul className='navbar-buttons'>
          <a className='navbar-item' href='/portfolio'>
            Home
          </a>
          <a className='navbar-item' href='/skills'>
            Skills
          </a>
          <a className='navbar-item' href='/work'>
            Work
          </a>
        </ul>

        {/* Hamburger*/}
        <div onClick={handleClick} className='hamburger'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul 
          className={
            !nav 
              ? 'hidden' 
              : 'mobile-menu'
          }
        >
          <li className='mobile-menu-items'>
            <a href='/portfolio'>
              Home
            </a>
          </li>
          <li className='mobile-menu-items'>
            <a href='/skills'>
              Skills
            </a>
          </li>
          <li className='mobile-menu-items'>
            <a href='/work'>
              Work
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className='social-icon-bar'>
          <ul>
            <li className='social-icon bg-blue-600'>
              <a  className='social-icon-text' href="https://www.linkedin.com/in/anthony-szabo-a3976622b/">
                LinkedIn <FaLinkedin size={30} />
              </a>
            </li>
            <li className='social-icon bg-[#333333]'>
              <a  className='social-icon-text' href="https://github.com/anthonyysz">
                GitHub <FaGithub size={30} />
              </a>
            </li>
            <li className='social-icon bg-[#FD4866]'>
              <Link to="contact" smooth={true} duration={500} className='social-icon-text'>
                Email <HiOutlineMail size={30} />
              </Link>
            </li>
            <li className='social-icon bg-[#565F69]'>
              <a  className='social-icon-text' href="https://resume.creddle.io/resume/98vmachii1e">
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
