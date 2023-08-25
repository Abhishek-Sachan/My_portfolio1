import React from "react";
import "./home.css"
import Logo1 from "./nith.jpg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

const Home=() =>{
    return(

       <section className="home container" id="home">
        <div className="intro">
            <img src={Logo1} alt="" className="home_img" />
        <h1 className="home_name">Abhishek Sachan</h1>
        <span className="home_education">I am Associate sde at Cognizant</span>
       
            <HeaderSocials />
            <a href="#contact" className="btn">Open for work</a>
              <ScrollDown />
       
        </div>
       </section>
    )
}

export default Home;