import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function WeatherCard(props) {

    return (
        <div>
            {props.city &&
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        onClick={props.viewedCity ? e => props.viewedCity(props.city) : console.log(props.city)}
                    >
                        <Typography>
                            <img height="20" src={"http://openweathermap.org/images/flags/" + props.city.sys.country.toLowerCase() + ".png"} alt={props.city.sys.country}></img>
                            &nbsp;&nbsp;{props.city.name}, {props.city.sys.country} <br />
                            Feels like {props.city.main.feels_like}&deg;C, {props.city.weather[0].description}<br />
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <>
                                <b>Expected weather from </b> {props.city.main.temp_min}&deg;C <b>to</b> {props.city.main.temp_max}&deg;C<br/>
                                <br/>
                                <b>Temperature:</b> {props.city.main.temp}&deg;C<br/>
                                <b>Humidity:</b> {props.city.main.humidity}% <br/>
                                <b>Pressure:</b> {props.city.main.pressure} hPa<br/>
                                <b>Wind:</b> {props.city.wind.speed} m/s<br/>
                                <b>Geo Location: </b>{props.city.coord.lat}, {props.city.coord.lon} {}<br/>
                                <b>Last Updated:</b> {new Date(props.city.dt * 1000).toLocaleString()}<br/>
                            </>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            }
        </div>
    )
}

