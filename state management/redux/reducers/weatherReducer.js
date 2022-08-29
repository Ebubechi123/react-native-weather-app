import getFormattedWeatherData from "../../../infrastructure/utilities/weatherServices/weatherServices";
import { WEATHER_TYPES } from "../types/types"

const initialState={
    deviceLocationWeather:[],
    searchedLocationWeather:[],
    previousData:[],
}


export const deviceLocationWeatherReducer=(state=initialState.deviceLocationWeather,{type,payload})=>{
    switch(type){
        case WEATHER_TYPES.GET_LOCATION_WEATHER:
            return {deviceWeather:payload}
            ;

            default: 
            return state;
    }
}
export const searchedLocationWeatherReducer=(state=initialState.searchedLocationWeather,{type,payload})=>{
    switch(type){
        case WEATHER_TYPES.GET_SEARCHED_LOCATION_WEATHER:
            return state;

            default: 
            return state;
    }
}
export const previousDataReducer=(state=initialState.previousData,{type,payload})=>{
    const data = payload
    switch(type){
        case WEATHER_TYPES.SET_PREVIOUS_DATA:
            return [
                ...state,
              {...data}
            ];

            default: 
            return state;
    }
}