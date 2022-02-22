import React, {useState, useRef} from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import Home from "./Home";
import Cities from "./Cities";
import Navbar from "./Navbar";
import Error from "./Error";
import NotFound from "./NotFound";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function App() {
    
    const [recentlyViewed, setRecentlyViewed] = useState([]);
    const [cities, setCities] = useState([]);
    const input = useRef('');
    const navigate = useNavigate();

    function viewedCity(city){

        if(!recentlyViewed.find((c) => c.id === city.id))
        {
            setRecentlyViewed((prevState) => [...prevState, city]);
        }
    }
    
    function handleOnSubmit(e){
        e.preventDefault();

        fetch(`https://api.openweathermap.org/data/2.5/find?q=${input.current.value}&units=metric&cnt=10&appid=809451e65a102c2763a8babb499713df`)
        .then(response => response.json())
        .then(res => {

            setCities(res.list);

            console.log(res.list);
            if(res.list && res.list.length > 0)
                navigate("/cities");
            else
                navigate(`/error/No Data Found`);
        })
        .catch(err => {
            navigate(`/error/Unknown Error`);
        })
    }

    return (    
        <>
            <Navbar recentlyViewed={recentlyViewed}/>

            <div className="text-center border-1 shadow-lg">

                <form method="post" onSubmit={handleOnSubmit}>
                    <input ref={input} type="text"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/cities" element={<Cities cities={cities} viewedCity={viewedCity}/>}/>
                <Route path="/recent/:id" element={<Cities recentlyViewed={recentlyViewed}/>}></Route>
                <Route path="/error/:error" element={<Error/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    )
}
