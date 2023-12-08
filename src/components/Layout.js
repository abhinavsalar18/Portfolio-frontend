import React, { useState } from 'react'

import {RiMenuFoldLine, RiMenuUnfoldLine} from "react-icons/ri"
import Menu from './Menu';
import Home from "../pages/Home"

import "../css_files/layout.css"
const Layout = () => {
    const  [toggle, setToggle] = useState(false);
  return (
    <>
        <div className='sidebar-section'>
            <div className={toggle ? 'sidebar-toggle sidebar' : "sidebar"}>
                <div className='sidebar-toggle-icons'>
                    <p onClick={() => setToggle(!toggle)}>
                        {
                            toggle ? 
                            (
                                <RiMenuUnfoldLine size={25} />
                            ) : (
                                <RiMenuFoldLine size={25} />
                            )
                        }
                    </p>
                </div>
                <Menu toggle={toggle} />
            </div>
            <div className='container'>
                <Home />
            </div>
        </div>
    </>
  )
}

export default Layout