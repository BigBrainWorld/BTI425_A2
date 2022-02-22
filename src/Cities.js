import React from "react";
import CityList from "./CityList";

export default function Cities(props){

    return (
        props.recentlyViewed ? 
            <CityList recentlyViewed={props.recentlyViewed}/>
            : 
            <CityList cities={props.cities} viewedCity={props.viewedCity}/>      
    )
}