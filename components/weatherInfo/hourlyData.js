import { View } from 'react-native'
// import { ClearSkyIcon, HeavyIntensityRainIcon, LightRainIcon } from '../../assets/icons/3DIcons';
import { colors } from '../../infrastructure/theme/colors';
import { DegreeSybmol, HourCard, HourContainer, InnerDegreeCircle } from '../../screens/Home/HomeStyles';
import { Store } from '../../state management/context/contextStore';
import { Text } from '../Typography/typography';
import { WeatherIconSet } from '../weatherIcons';

const HourlyData = () => {
    const data = [
        {
            icon:'light rain',
            time:'01.00pm',
            degree:'11'
        },
        {
            icon:'clear sky',
            time:'04.00pm',
            degree:'10'
        },
        {
            icon:'few clouds',
            time:'07.00pm',
            degree:'8'
        },
    ]

    const {theme,deviceWeather} = Store();
    // console.log(deviceWeather.hourly)
    return ( 
        <>
        <HourContainer>
            {/* Returns Hourly Report if there's a successful feedback from the weather state */}
            {deviceWeather && 
               deviceWeather?.hourly?.map(({description,temp,date})=>(
                <HourCard key={Math.random()} >
                   <View style={{elevation:1}} >
                   {WeatherIconSet(description.toString(),45)}
                   </View>
                   <Text fontSize={'14px'} color={theme ? colors.black.inactive : colors.white} style={{margin:12}} >{date<12 ? date+"am" : date <12  &&date+"pm"}</Text>
                   <Text fontSize={'20px'} color={theme ? colors.black.inactive : colors.white} fontWeight={800} style={{margin:4}}>{Math.floor(temp)}</Text>
                   <DegreeSybmol size={'10px'} top={"101px"}  bg={theme ? colors.primary_color : 'white'} right={'40%'} >
                   <InnerDegreeCircle size={'5px'} bg={theme ? 'white' : 'black'} />
                   </DegreeSybmol>
                </HourCard>
            ))
            }



            {/* Returns a defualt state if there's no feedback from the weather state */}


            {!deviceWeather && 
            
            [0,1,2,3,].map(item=>(
                <HourCard key={item} >
                <View style={{elevation:1}} >
                {WeatherIconSet('sky',45)}
                </View>
                <Text fontSize={'13px'} color={theme ? colors.black.inactive : colors.white} style={{margin:12}} >{"1:00pm"}</Text>
                <Text fontSize={'20px'} color={theme ? colors.black.inactive : colors.white} fontWeight={800} style={{margin:4}}>{"11"}</Text>
             </HourCard>
            ))
            
            }
        </HourContainer>
        </>
     );
}
 
export default HourlyData;