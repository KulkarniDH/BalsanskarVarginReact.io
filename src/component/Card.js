import React from "react";
import "./Arrange.css"

const Card=(props)=>{
    return(
     
        <section >
        
     <div  className="arrange-data">
    <div > 
    <img src={props.imgsrc}alt="mypic" className="arrange-img"></img>
    <div className="card-info">
        {/* <span className="">{props.title}</span> */}
        <h3 className=""> {props.name}</h3>
        <a href={props.link} target="-blank"> <button className="arrange-button">Watch Now</button></a>
        </div>
    </div> 
      </div>

</section>
 )
}
export default Card;




   