import axios from 'axios';
import {WEATHER_LOAD,GET_WEATHER_SUCCESS,WEATHER_FAIL} from '../constants/actionTypes';


export const getweather=(query)=>async dispatch=>{
    dispatch({type:WEATHER_LOAD})
    try {
        const res=await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=d53041110cbe4bb2868204654210409&q=${query}&days=6&aqi=no&alerts=no`)
      console.log(res)
        dispatch({type:GET_WEATHER_SUCCESS, payload:res.data})      
    } catch (error) {
        dispatch({type:WEATHER_FAIL, payload:error})  
    }
}