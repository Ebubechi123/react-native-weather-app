import { ClearSkyIcon, ExtremeRainIcon, FewCloudsIcon, HeavyIntensityRainIcon, LightRainIcon, LightRainSnowIcon, ThunderStormIcon } from "../../assets/icons/3DIcons";


export const WeatherIconSet =(icon,iconSize,style)=>{
    switch (icon) {
      case "clear sky":case "sky":
            return <ClearSkyIcon  height={iconSize} width={iconSize}  style={style}/>;
         case 'light rain':
            return <LightRainIcon height={iconSize} width={iconSize} style={style}/>;
         case 'thunderstorm':case "thunderstorm with light rain":case"	thunderstorm with rain":case"thunderstorm with heavy rain":case"light thunderstorm":case"	heavy thunderstorm":case"ragged thunderstorm":case"thunderstorm with light drizzle":case"	thunderstorm with drizzle":case"thunderstorm with heavy drizzle":
            return <ThunderStormIcon height={iconSize} width={iconSize} style={style}/>;
         case 'rain':
            return <LightRainIcon height={iconSize} width={iconSize} style={style}/>;
         case 'extreme rain':
            return <ExtremeRainIcon height={iconSize} width={iconSize} style={style}/>;
         case 'few clouds':case"scattered clouds: 25-50%":case"broken clouds":case"overcast clouds":
            return <FewCloudsIcon height={iconSize} width={iconSize} style={style}/>;
    
         case 'heavy intensity rain':
            return <HeavyIntensityRainIcon height={iconSize} width={iconSize} style={style}/>;
    
         case 'light rain snow':
            return <LightRainSnowIcon height={iconSize} width={iconSize} style={style}/>;
    
        default:
            return null;
          
    }
}