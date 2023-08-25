import React from "react";


const Card=(props) =>{
    return(
<div className="timeline_item">
      <i className={props.icon}></i>

<h3 className="timeline_title">
    {props.title}
</h3>
<span className="timeline_date">
    {props.year}
</span>

<span className="timeline_marks">
    {props.marks}
</span>
<p className="titmeline_text">
    {props.desc}
</p>
</div>
    )
}
export default Card;