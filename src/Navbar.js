import React from "react";
import Tab from "./Tab";

export default function Navbar(props){
    return (
        <div>
            <Tab recentlyViewed={props.recentlyViewed}/>
        </div>
    )
}