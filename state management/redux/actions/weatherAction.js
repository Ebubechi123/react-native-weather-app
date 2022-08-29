import { WEATHER_TYPES } from "../types/types"


export const getLocationWeatherAction=(weather)=>{
    return{
        type:WEATHER_TYPES.GET_LOCATION_WEATHER,
        payload:weather
    }
}
export const getSearchedLocationWeatherAction=(weather)=>{
    return{
        type:WEATHER_TYPES.GET_SEARCHED_LOCATION_WEATHER,
        payload:weather
    }
}
export const setPreviouData=(data)=>{
    return{
        type:WEATHER_TYPES.SET_PREVIOUS_DATA,
        payload:data
    }
}