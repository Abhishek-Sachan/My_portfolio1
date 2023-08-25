import React from "react";
import "./about.css";
import Pic from "./my_pic.jpg"


const About=() =>{
    return(
        <section className="about container section" id=
        "about">
          <h2 className="section_title">About me</h2>
          <div className="about_container grid">

            <img src={Pic} alt="" className="about_img" />
            <div className="about_data grid">
            <div className="about_info">
            <p className="about_description">
            I am a 2022 pass out ECE undergraduate , B.Tech Degree from IIIT, Una.In current time, I am in Cognizant as Associate Sde. I have
             experience in java-backend project using springboot, kafka,postgresql,postman technology.I have experience with frontend also.
            </p>
            <a href="https://fonts.google.com/" className="btn" target="_main">Resume</a>
            </div>
            <div className="about_skills grid">
                <div className="skills_data">
                    <div className="skills_titles">
                        <h3 className="skills_name">
                            Java
                        </h3>
                        <span className="skills_number"> 90%</span>
                    </div>
                    <div className="skills_bar">
                        <span className="skills_percentage java"></span>
                    </div>
                </div> 

                <div className="skills_data">
                    <div className="skills_titles">
                        <h3 className="skills_name">
                            Spring Boot 
                        </h3>
                        <span className="skills_number">80%</span>
                    </div>
                    <div className="skills_bar">
                        <span className="skills_percentage springboot"></span>
                    </div>
                </div>

                <div className="skills_data">
                    <div className="skills_titles">
                        <h3 className="skills_name">
                            Kafka 
                        </h3>
                        <span className="skills_number">70%</span>
                    </div>
                    <div className="skills_bar">
                        <span className="skills_percentage kafka"></span>
                    </div>
                </div>

                <div className="skills_data">
                    <div className="skills_titles">
                        <h3 className="skills_name">
                            Postgresql
                        </h3>
                        <span className="skills_number">80%</span>
                    </div>
                    <div className="skills_bar">
                        <span className="skills_percentage postgresql"></span>
                    </div>
                </div>

                <div className="skills_data">
                    <div className="skills_titles">
                        <h3 className="skills_name">
                            React Js
                        </h3>
                        <span className="skills_number">70%</span>
                    </div>
                    <div className="skills_bar">
                        <span className="skills_percentage react"></span>
                    </div>
                </div>
            </div>
            </div>
          </div>



        </section>
    )
}

export default About;