import React, {useState, useEffect} from 'react';
import './css/style.css';

const Weathapp = () => {

    const [city, setCity] = useState('');
    const [search, setSearch] = useState('');
    
useEffect(() => {
    const fetchapi = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=848784747487a8db7d4a742f331b29b3`
        const response = await fetch(url);
        const resJson = await response.json();
        setCity(resJson.main);
    };
        fetchapi();
    },[search] 
    )

    return (
        <>
            <div className="box">
                <div className="inputdata">
                <input
                        type="search"
                        value={search}
                    className="inputfield"
                    onChange={(event) => {
                        setSearch(event.target.value);
                     }}/>
                
                {/* 848784747487a8db7d4a742f331b29b3 */}
                </div>
                {
                    !city ? (
                        <p className="errorMsg"> No Data found</p>
                    ) : (<div>
                            <div className="info">
                <h2 className="location">
                <i className="fas fa-street-view"></i>{search}
                </h2>
                <h1 className="temp">{city.temp} °C</h1>
                <h3 className="temp_min_max">Min: {city.temp_min} °C | Max: {city.temp_max} °C</h3>

            </div>
                    </div>)
                }
            

            <div className="wave"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
                
            </div>
        </>
    )
}

export default Weathapp;