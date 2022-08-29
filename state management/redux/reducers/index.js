import { combineReducers } from "redux";
import { ThemeReducer } from "./themeReducer";
import { deviceLocationWeatherReducer, previousDataReducer, searchedLocationWeatherReducer } from "./weatherReducer";


export const Reducers = combineReducers({
    deviceWeather:deviceLocationWeatherReducer,
    searchedWeather:searchedLocationWeatherReducer,
    previousData:previousDataReducer,
    theme:ThemeReducer
})