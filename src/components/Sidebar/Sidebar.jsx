import React from "react";
import "./sidebar.css";
import Logo1 from "./developer.png"
import { useState } from "react";

const Sidebar=() =>{
    const [toggle,showMenu]=useState(false);
    return (
<>
        <aside className={toggle ? "aside show-menu" : "aside"}>
           <a href="#home" className="nav_logo">
            <img src={Logo1} alt="" />
            </a> 
            <nav className="nav">
                <div className="nav_menu">
                    <ul className="nav_list">
                        <li className="nav_item">
                            <a href="#home" className="nav_link">
                            <i class="las la-home"></i>
                            </a>
                            
                        </li>

                        <li className="nav_item">
                            <a href="#about" className="nav_link">
                            <i class="las la-user"></i>
                            </a>
                           
                        </li>

                        

                        <li className="nav_item">
                            <a href="#resume" className="nav_link">
                            <i class="las la-graduation-cap"></i>
                            </a>
                            
                        </li>

                        <li className="nav_item">
                            <a href="#portfolio" className="nav_link">
                            <i class="las la-project-diagram"></i>
                            </a>
                           
                        </li>

                       

                       

                        <li className="nav_item">
                            <a href="#contact" className="nav_link">
                            <i class="las la-sms"></i>
                            </a>
                           
                        </li>

                    </ul>
                </div>
            </nav>

            <div className="nav_footer">
                <span className="copyright">
                    &copy; 2023 - 2024.
                </span>
            </div>
        </aside>
<div className={toggle ? "nav_toggle nav_toggle-open":
"nav_toggle"} onClick={
    () => showMenu(!toggle)
}>
<i class="las la-bars"></i>
</div>
        </>
    )
}

export default Sidebar;