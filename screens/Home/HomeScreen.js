import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { ImageBackground } from "react-native";
import { LocationIcon } from "../../assets/icons/icons";
const Globe = require("../../assets/images/world2.png");
import Layout from "../../components/Layout/layout";
import { Text } from "../../components/Typography/typography";
import HourlyData from "../../components/weatherInfo/hourlyData";
import LocationStats from "../../components/weatherInfo/locationStats";
import { colors } from "../../infrastructure/theme/colors";
import {
  Col1,
  Col2,
  HomeHeaderStyle,
  IconBox,
  ImageContainer,
  LocationBox,
  ThemeBox,
} from "./HomeStyles";
import { WeatherIconSet } from "../../components/weatherIcons";
import { DeviceLocation } from "../../state management/context/locationContext";
import getFormattedWeatherData, { getformatForecastWeather, getFormattedCurrentWeather, getFormattedWeather, getWeatherData } from "../../infrastructure/utilities/weatherServices/weatherServices";
import { Store } from "../../state management/context/contextStore";
import { ThemeHandler } from "../../infrastructure/utilities/functions";
import axios from "axios";

export const HomeHeader = () => {
  const { theme, setTheme,deviceWeather } = Store();
  const Icons = [
    {
      icon: <Ionicons name="sunny" color={colors.lightgrey} size={16} />,
      state: theme ? false : false,
      themeValue: true,
      key:1,
    },
    {
      icon: <Ionicons name="ios-moon" color={colors.white} size={16} />,
      state: theme ? false : false,
      themeValue: false,
      key:2
    },
  ];

  const IconHandler = (Icon,state, themeValue,key) => {
    ThemeHandler(themeValue, setTheme, theme);
    // console.log('yes')
  };
  return (
    <>
      <HomeHeaderStyle>
        <Col1>
          <Text
            color={theme ? colors.black.dark_mode : colors.white}
            fontSize={"15px"}
            fontWeight={"800"}
          >
            24, Aug 2022
          </Text>

          <LocationBox>
            <LocationIcon
              color={theme ? colors.black.dark_mode : colors.white}
              size={14}
            />
            {/* <Text
              color={theme ? colors.black.dark_mode : colors.white}
              style={{ paddingLeft: 8 }}
              fontSize={"17px"}
            >
             {deviceWeather?.timezone}
            </Text> */}

          
            
            <Text
            color={theme ? "black" : colors.white}
            fontSize={"23px"}
            style={{ paddingLeft: 8 }}
          >
           {deviceWeather.name},
          </Text>
          
            <Text
            color={theme ? "silver" : colors.black.inactive}
            fontSize={"15px"}
            style={{ paddingLeft: 8 }}
          >
           {deviceWeather.country}
          </Text>
               
          
            {/* <Text
              color={theme ? "silver" : colors.black.inactive}
              fontSize={"15px"}
              style={{ paddingLeft: 8 }}
            >
              Nigeria
            </Text> */}
          </LocationBox>
        </Col1>

        <Col2>
          <ThemeBox>
            {Icons?.map((Icon) => (
              <IconBox
                key={Icon.key}
                onPress={() => {
                  IconHandler(Icon, Icon.state, Icon.themeValue,Icon.key);
                }}
              bg={Icon.state ?  colors.primary_color : '' }
              >
                {Icon.icon}
              </IconBox>
            ))}
          </ThemeBox>
        </Col2>
      </HomeHeaderStyle>
    </>
  );
};

const HomeScreen = () => {
  const [Lat,Long] = DeviceLocation();
  const {deviceWeather,setDeviceWeather,theme} = Store();

const FetchData = async ()=>{
const localData = await getWeatherData("https://api.openweathermap.org/data/2.5/weather?q=abuja&appid=82a2c2050e4518854b40feade796e845&units=metric")
  const{lat,lon} = getFormattedCurrentWeather(localData)

  // console.log("Local Data",localData)
 await getformatForecastWeather(lat,lon,localData).then((data)=>{
  setDeviceWeather(data)
  console.log("Device weather: ",deviceWeather)
 })


}

  useEffect(()=>{
    FetchData();
  },[])
  
let description=deviceWeather?.current?.weather[0]?.description
  return (
    <>
      <Layout>
        <HomeHeader />

        <ImageContainer>
          <ImageBackground
            source={Globe}
            style={{
              flex: 0.7,
              width: "98%",
              opacity: theme ? 0.3 : 0.18,
              left: 0,
            }}
          />

          {WeatherIconSet(description, 180, {
            position: "absolute",
            zIndex: 1,
            top:'30%',
          })}
        </ImageContainer>

        <LocationStats />
        <HourlyData />
      </Layout>
    </>
  );
};

export default HomeScreen;
