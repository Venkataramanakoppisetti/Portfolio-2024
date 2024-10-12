import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import './index.css'

const Navbar = () => {
    const navData = [
        {
            route: "HOME",
            to: "/",
            id: 1
        },
        {
            route: "ABOUT",
            to: "/about",
            id: 2
        },
        {
            route: "SKILLS",
            to: "/skills",
            id: 3
        },
        {
            route: "RESUME",
            to: "/resume",
            id: 4
        },
        {
            route: "PORTFOLIO",
            to: "/portfolio",
            id: 5
        },
        {
            route: "CONTACT",
            to: "/contact",
            id: 6
        }
        
    ]

    const [toggleIcon, setToggleIcon] = useState(false);

    const onToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    }

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
            <Link to={'/'} className='navbar-container-logo'>
                <img src="https://res.cloudinary.com/dyhrvktyr/image/upload/v1690866029/IMG_20210818_205126_cvxtmh.jpg" alt="profile" className="profile" />
            </Link>
        </div>
        <ul className={`nav-elements ${toggleIcon ? 'active' : ''}`}>
            {navData.map((item) => (
                <li key={item.id} className='nav-item'>
                    <Link className='nav-item-link' to={item.to}>{item.route}</Link>
                </li>
            ))}
        </ul>
        <div className="nav-icon" onClick={onToggleIcon}>
            {toggleIcon ? <IoMdClose size={30}/> : <GiHamburgerMenu  size={30}/>  }
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
