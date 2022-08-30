import styled from "styled-components/native";
import { ThunderStormIcon } from "../../assets/icons/3DIcons";
import { colors } from "../../infrastructure/theme/colors";
import { WindSpeedConverter } from "../../infrastructure/utilities/weatherServices/weatherServices";
import { Store } from "../../state management/context/contextStore";
import { Text } from "../Typography/typography";
import { WeatherIconSet } from "../weatherIcons";

const WeatherDetailsView = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const RightCol = styled.View`
  flex-basis: 40%;
  border-left-width: 0.2px;
  border-left-color: ${colors.lightgrey};
  background-color: #afafaf42;
  padding: 15px;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`;
const LeftCol = styled.View`
  flex-basis: 40%;
  border-right-width: 0.2px;
  border-right-color: ${colors.lightgrey};
  background-color: #afafaf42;
  padding: 15px;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`;

const DetailView = styled.View`
  justify-content: center;
  align-items: center;
`;

const IconView = styled.View`
  position: absolute;
  z-index: 99;
  top: 30%;
`;
const WeatherDetails = () => {
  const {theme,deviceWeather} = Store();
  console.log("Device weather from weather details screen: ",deviceWeather)

    let Precipitation = deviceWeather.current.dew_point;
    let Humidity = deviceWeather.current.humidity;
    let Wind_Speed = deviceWeather.current.wind_speed;
    let Pressure = deviceWeather.current.pressure;
    let Weather_Description = deviceWeather?.current?.weather[0]?.description;
  return (
    <>
      <WeatherDetailsView>
        <IconView>
        {WeatherIconSet(Weather_Description.toString(),52)
       
        }
        </IconView>
        <LeftCol>
          <DetailView style={{ marginBottom: 12 }}>
            <Text
              fontWeight={"700"}
              color={theme ? colors.grey :"lightgray"}
              style={{ opacity: 0.7 }}
              fontSize={"17px"}
            >
              Precipitation
            </Text>
            <Text
              style={{ marginTop: 9 }}
              fontWeight={"500"}
              color={theme ? colors.black.inactive :colors.white}
              fontSize={"16px"}
            >
              {Precipitation}%
            </Text>
          </DetailView>
          <DetailView>
            <Text
              fontWeight={"700"}
              color={theme ? colors.grey :"lightgray"}
              style={{ opacity: 0.7 }}
              fontSize={"17px"}
            >
              Humidity
            </Text>
            <Text
              style={{ marginTop: 9 }}
              fontWeight={"500"}
              color={theme ? colors.black.inactive :colors.white}
              fontSize={"16px"}
            >
              {Humidity}%
            </Text>
          </DetailView>
        </LeftCol>

        <RightCol>
          <DetailView style={{ marginBottom: 12 }}>
            <Text
              fontWeight={"700"}
              color={theme ? colors.grey :"lightgray"}
              style={{ opacity: 0.7 }}
              fontSize={"17px"}
            >
              Wind
            </Text>
            <Text
              style={{ marginTop: 9 }}
              fontWeight={"500"}
           color={theme ? colors.black.inactive :colors.white}
              fontSize={"16px"}
            >
              {WindSpeedConverter(Wind_Speed)} km/h
            </Text>
          </DetailView>
          <DetailView>
            <Text
              fontWeight={"700"}
              color={theme ? colors.grey :"lightgray"}
              style={{ opacity: 0.7 }}
              fontSize={"17px"}
            >
              Pressure
            </Text>
            <Text
              style={{ marginTop: 9 }}
              fontWeight={"500"}
              color={theme ? colors.black.inactive :colors.white}
              fontSize={"16px"}
            >
              {Pressure}hPa
            </Text>
          </DetailView>
        </RightCol>
      </WeatherDetailsView>
    </>
  );
};

export default WeatherDetails;
