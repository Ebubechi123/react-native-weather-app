import { DateTime } from "luxon";

// WEATHER SERVICES 
const BASE_URL='https://api.openweathermap.org/data/2.5';
const API_KEY="82a2c2050e4518854b40feade796e845";


//  export const getWeatherData = (infoType,searchParams)=>{
//     const url = new URL(BASE_URL + "/" + infoType);
//     url.search = new URLSearchParams({...searchParams,appid:API_KEY});
//     return fetch(url).then((res)=>res.json());

// }


// const formatCurrentWeather = (data)=>{

//     const {
//         coord:{lat,lon},
//         main:{temp,humidity,pressure,name,dt,sys:{country},weather,wind:{speed}}
//     } = data;

//     const {main:details} = weather[0]
//     return {lat,lon,temp,humidity,pressure,name,dt,country,details,speed}
// }

// const formatForcastWeather = (data)=>{
//     let {timezone,daily,hourly} = data;
//     hourly = hourly.slice(1,3).map(d=>{
//         return{
//             title:formatToLocalTime(d.dt,timezone,'hh:mm a'),
//             temp: d.temp.day,
//             icon:d.weather[0].icon
//         }
//     });
//     return {timezone,hourly}
// }

// const formatToLocalTime = (secs,zone,format = "cccc, dd LLL yyyy ' | Local time: 'hh:mm a")=> DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

// const getFormattedWeatherData = async(searchParams)=>{
//     const formattedCurrentWeather = await getWeatherData('weather',searchParams).then(formatCurrentWeather);
//     const {lat,lon} = formattedCurrentWeather
//     const formattedForcastWeather = await getWeatherData('onecall',{
//         lat, lon, exclude:'current,minutely,alerts', units:searchParams.units
//     }).then(formatForcastWeather);
//     return {...formattedCurrentWeather, ...formattedForcastWeather} ;
// }

// export default getFormattedWeatherData





// export const getWeatherData = (infoType, searchParams) => {
//     let url = new URL(BASE_URL + "/" + infoType);
//     url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  
//     return fetch(url).then((res) => res.json());
//   };
  
//   const formatCurrentWeather = (data) => {
//     const {
//       coord: { lat, lon },
//       main: { temp, feels_like, temp_min, temp_max, humidity },
//       name,
//       dt,
//       sys: { country, sunrise, sunset },
//       weather,
//       wind: { speed },
//     } = data;
  
//     const { main: details, icon } = weather[0];
  
//     return {
//       lat,
//       lon,
//       temp,
//       feels_like,
//       temp_min,
//       temp_max,
//       humidity,
//       name,
//       dt,
//       country,
//       sunrise,
//       sunset,
//       details,
//       icon,
//       speed,
//     };
//   };
  
//   const formatForecastWeather = (data) => {
//     let { timezone, daily, hourly } = data;
//     daily = daily.slice(1, 6).map((d) => {
//       return {
//         title: formatToLocalTime(d.dt, timezone, "ccc"),
//         temp: d.temp.day,
//         icon: d.weather[0].icon,
//       };
//     });
  
//     hourly = hourly.slice(1, 6).map((d) => {
//       return {
//         title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
//         temp: d.temp,
//         icon: d.weather[0].icon,
//       };
//     });
  
//     return { timezone, daily, hourly };
//   };
  
//   const getFormattedWeatherData = async (searchParams) => {
//     const formattedCurrentWeather = await getWeatherData(
//       "weather",
//       searchParams
//     ).then(formatCurrentWeather);
  
//     const { lat, lon } = formattedCurrentWeather;
  
//     const formattedForecastWeather = await getWeatherData("onecall", {
//       lat,
//       lon,
//       exclude: "current,minutely,alerts",
//       units: searchParams.units,
//     }).then(formatForecastWeather);
  
//     return { ...formattedCurrentWeather, ...formattedForecastWeather };
//   };
  
//   const formatToLocalTime = (
//     secs,
//     zone,
//     format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
//   ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
  
// //   const iconUrlFromCode = (code) =>
// //     `http://openweathermap.org/img/wn/${code}@2x.png`;
  
//   export default getFormattedWeatherData;
  
//   export { formatToLocalTime};



export const getWeatherData=  async (url)=>{
return fetch(url)
    .then((res)=>res.json())
}



export const getFormattedCurrentWeather=(data)=>{
   
const { coord:{lat,lon},
main:{temp, feels_like, temp_min, temp_max, humidity },
name,
dt,
sys: { country, sunrise, sunset },
weather,
wind: { speed },

}=data;

    const { main: details, icon } = weather[0];
  
    return {
      lat,
      lon,
      temp,
      feels_like,
      temp_min,
      temp_max,
      humidity,
      name,
      dt,
      country,
      sunrise,
      sunset,
      details,
      icon,
      speed,
    };
  
    
    // const formattedForecastWeather = await getWeatherData("onecall", {
    //     lat,
    //     lon,
    //     exclude: "current,minutely,alerts",
    //     units: searchParams.units,
    //   }).then(formatForecastWeather);

    // fetch()
    
}


const formatForecastWeather = (data,localData) => {
        let { timezone,current,hourly } = data;
        let {
          name ,
          dt,
        sys: { country},
        pressure,
        wind_speed,
        dew_point,
        humidity
      
      } = localData
        hourly = hourly.slice(0,3).map((d) => {
          return {
            // title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
            temp: d.temp,
            icon: d.weather[0].icon,
                description:d.weather[0].description,
                id:d.weather[0].id
          };
        });
      

        return { timezone, hourly,current,name,dt,country,pressure,wind_speed,dew_point,humidity};

      };
export const getformatForecastWeather=(lat,lon,localData)=>{
return fetch(`${BASE_URL}/onecall?lat=${lat}&lon=${lon}&exclude=minutely,daily,alerts&units=metric&appid=${API_KEY}`)
.then((res)=>res.json())
.then((data)=>formatForecastWeather(data,localData))

}
const formatToLocalTime = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
  ) => DateTime.fromObject(secs).setZone(zone).toFormat(format);