import React, { useState } from "react";
import "./ConferenceEvent.css"
import TotalCost from "./TotalCost";


const ConferenceEvent = () => {
 const[showItems,setShowItems] = useState(false)

 const handleToggleItems = () => {
    console.log("handleTogleItems called");
    setShowItems(!showItems)
    
 }

    return (
        <>
            <nav className="nav_event_conference">
                <div className="company_logo">Planificador de Eventos</div>
                <div className="left_navbar">
                    <div className="nav_links">
                        <a href="">Venue</a>
                        <a href="">Add-ons</a>
                        <a href="">Meals</a>
                    </div>
                </div>

                <button className="details_button">Show Detail</button>
            </nav>

            <div className="main_container">
               {!showItems 
                    ?
                    (
                        <div className="items-information">
                            <p>Muetra informacion de Items</p>
                        </div>
                    )
                    : (
                        <div className="total_amount_detail">
                            <TotalCost/>
                        </div>
                    )
               }
            </div>

        </>
    )
}


export default ConferenceEvent