import React, {useState} from "react";

export default function HomeCity(){
    const [home, setHome] = useState(() => {
        if(!navigator.geolocation) {
            console.log('Geolocation is not supported by your browser');
          } else {
            navigator.geolocation.getCurrentPosition(success, error);
          }
    });

    function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
    
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=809451e65a102c2763a8babb499713df`)
        .then(response => response.json())
        .then(res => {
            setHome(res);
        })
    }
  
    function error() {
      console.log('Unable to retrieve your location');
    }

    function getCurrentDate(){

      const day = new Date();

      function monthToString(month){

        let monthString = '';

        switch(month){
          case 0:
            monthString = 'January';
            break;
          case 1:
            monthString = 'February';
            break;
          case 2:
            monthString = 'March';
            break;
          case 3:
            monthString = 'April';
            break;
          case 4:
            monthString = 'May';
            break;
          case 5:
            monthString = 'June';
            break;
          case 6:
            monthString = 'July';
            break;
          case 7:
            monthString = 'August';
            break;
          case 8:
            monthString = 'September';
            break;
          case 9:
            monthString = 'October';
            break;
          case 10:
            monthString = 'November';
            break;
          case 11:
            monthString = 'December';
            break;
          default:
            monthString = "Unknown";
            break;
        }

        return monthString;
      }
      function dayToString(day){

        let dayString = '';

        switch(day){
          case 0:
            dayString = 'Sunday';
            break;
          case 1:
            dayString = 'Monday';
            break;
          case 2:
            dayString = 'Tuesday';
            break;
          case 3:
            dayString = 'Wednesday';
            break;
          case 4:
            dayString = 'Thursday';
            break;
          case 5:
            dayString = 'Friday';
            break;
          case 6:
            dayString = 'Saturday';
            break;
          default:
            dayString = "Unknown";
            break;
        }

        return dayString;
      }

      return dayToString(day.getDay()) + ' ' + day.getDate() + ', ' + monthToString(day.getMonth()) + ' ' + day.getFullYear();
    }

    return (
      <div>
        {home ? 
          <span>
            <i>
              <h4>{home.name}</h4>
              {getCurrentDate()}<br/>
              {Math.round(home.main.temp)}&deg;C<br/>
              {home.weather[0].description}<br/>
              {Math.round(home.main.temp_min)}&deg;C/{Math.round(home.main.temp_max)}&deg;C<br/>
            </i>
          </span> : null}
      </div>
    )
}