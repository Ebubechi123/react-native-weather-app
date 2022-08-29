import { ImageBackground, StyleSheet} from 'react-native'
import React from 'react'
import Layout from '../../components/Layout/layout'
import { ImageContainer } from '../Home/HomeStyles'
import Globe from "../../assets/images/world2.png"
import LocationStats from '../../components/weatherInfo/locationStats'
import HourlyData from '../../components/weatherInfo/hourlyData'
import { WeatherIconSet } from '../../components/weatherIcons'
import Header from '../../components/Header'
import { colors } from '../../infrastructure/theme/colors'



const WeatherDetailsScreen = ({route}) => {
    const {city} = route.params;


  
  return (
    <Layout>

<Header title={JSON.stringify(city)} backbtn={true}/>
<ImageContainer>
 <ImageBackground  source={Globe}
     style={{ flex: 0.7, width: "98%", opacity: 0.2, left: 0 }}/>
      {WeatherIconSet("thunderstorm",180, { position: "absolute", zIndex: 1, top: 50 })}
</ImageContainer>

<LocationStats />
 <HourlyData />


           

</Layout>


  )
}

export default WeatherDetailsScreen

const styles = StyleSheet.create({
    container:{
      width:'100%',
      flex:1,
      paddingTop:20,
    //   justifyContent:'flex-start',
      // backgroundColor:'#F9F9F9',
      backgroundColor:colors.black.dark_mode,
    },
    seccontainer: {
        // width: "100%",
        display: "flex",
        paddingTop: 350,
        // flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      },
})