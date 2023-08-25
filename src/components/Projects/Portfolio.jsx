import React from "react";
import "./portfolio.css";
import Menu from "./Menu";
import { useState } from "react";

const Portfolio= () =>{

    const [items, setItems]=useState(Menu);
    const filterItem=(categoryItem) =>{
        const updatedItems=Menu.filter((currElem)=>{
return currElem.category=== categoryItem;
        })
      setItems(updatedItems);
    }
    return(
        <section className="work container section" id="portfolio">
            <h2 className="section_title">Project</h2>
            <div className="work_filters">
                <span className="work_item" onClick={() => setItems(Menu)} >All</span>
                <span className="work_item" onClick={()=> filterItem("Frontend")}>Frontend</span>
                <span className="work_item" onClick={()=> filterItem("Backend")}>Backend</span>
                
            </div>
            <div className="work_container grid">

                {items.map((elem) =>{
                    const{id,image,github,title,category}= elem;
                    return(
                        <div className="work_card" key={id}>
                          <div className="work_thumbnail">
                         
                          <img src={image} alt="" className="work_img" /> 
                          
                            
                           
                            <div className="work_mask"></div>

                          </div>
                          

                             <span className="work_category">
                                {category}
                             </span>
                             <h3 className="work_title">
                                {title}
                             </h3>
                             <a href={github} target="_main"className="work_button">
                             <i class="las la-paperclip"></i>
                             </a>

                             
                             
                             
                        </div>


                    )

                })}
            </div>
        </section>
    )
}

export default Portfolio;