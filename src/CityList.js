import React, { useState } from "react";
import WeatherCard from "./WeatherCard"
import { useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";

export default function CityList(props){
    
    const {id} = useParams();

    const [pageNumber, setPageNumber] = useState(0);
    const citiesPerPage = 3;
    const pagesVisited = pageNumber * citiesPerPage;

    const displayCities = props.cities ? props.cities
    .slice(pagesVisited, pagesVisited + citiesPerPage)
    .map((city, index) => {
        return (
            <WeatherCard key={index} city={city} viewedCity={props.viewedCity}/>
        )
    }) : null;

    function getIndex(){

        let index;

        for (index = 0; index < props.recentlyViewed.length && props.recentlyViewed[index].id !== Number(id); index++);

        return index;
    }

    function changePage({selected}){
        setPageNumber(selected);
    }

    return (
        props.recentlyViewed && props.recentlyViewed.length > 0 ? 
            <WeatherCard city={props.recentlyViewed[getIndex()]}/>
        :    
        <>   
            {displayCities}
            <ReactPaginate 
                previousLabel={"<"} 
                nextLabel={">"} 
                pageCount={Math.ceil(props?.cities?.length / citiesPerPage)}
                onPageChange={changePage}
                containerClassName={"pageButtons"}
                previousLinkClassName={"previousButton"}
                nextLinkClassName={"nextButton"}
                disabledClassName={"disabledPage"}
                activeClassName={"activePage"}/>
        </>
    )
    
}