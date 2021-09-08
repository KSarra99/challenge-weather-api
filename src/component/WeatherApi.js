import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from "react-redux";
import { getweather } from '../redux/actions/action';
import WeatherSearch from './WeatherSearch';
import { WiCelsius } from "weather-icons-react";
import "./Weatherapi.css";


const WeatherApi = () => {
    const dispatch = useDispatch();
    const [query,setQuery] = useState("GAFSA");
    useEffect(() => {
       dispatch(getweather(query))
    }, [query]);

    const handleSearch=(input)=>{
setQuery(input);
    };
    const data = useSelector((state) => state.reduccer.data)
    const load = useSelector((state) =>state.reduccer.isloading )
    return (
        <div>
           <WeatherSearch handleSearch={handleSearch} />
      <div>
        {load ? (
          <h1>Loading ....</h1>
        ) : (
          <div>
            <div className="weither-icon"></div>
            <img
              src={`//cdn.weatherapi.com/weather/64x64/day/113.png`}
              alt="non disponible"
            />
            <h3>{data.location && data.location.name}</h3>
            <div className="temperature">
              <h2>
                {" "}
                {data.current && parseInt(data.current.temp_c)}
                <WiCelsius size={30} color="#000" />
              </h2>
            </div>
            {
              <div className="temperature-range">
                <h2>
                  {data.current && parseInt(data.current.temp_c)}&deg;C ||{" "}
                  {data.current && parseInt(data.current.temp_f)}&deg;F ||
                  humidity:
                  {data.current && data.current.humidity}%
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  {data.forecast &&
                    data.forecast.forecastday.map((el) => (
                      <div style={{ margin: "5px" }}>
                        <div className="widget">
                          <div className="left-panel panel">
                            <div className="date">{el.date}</div>
                            <div className="city">{el.day.condition.text}</div>
                            <div className="temp">
                              <img
                                src="https://s5.postimg.cc/yzcm7htyb/image.png"
                                alt=""
                                width={60}
                              />
                              27°
                            </div>
                          </div>
                          <div className="right-panel panel">
                            <img
                              src="https://s5.postimg.cc/lifnombwz/mumbai1.png"
                              alt=""
                              width={160}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            }
          </div>
        )}
      </div>  
        </div>
    )
}

export default WeatherApi
