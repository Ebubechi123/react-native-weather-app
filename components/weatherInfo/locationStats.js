import { colors } from "../../infrastructure/theme/colors";
import {
  Box,
  BoxContainer,
  DegreeSybmol,
  InnerDegreeCircle,
} from "../../screens/Home/HomeStyles";
import { Store } from "../../state management/context/contextStore";
import { Text } from "../Typography/typography";

const LocationStats = () => {
  const {
    theme,
    deviceWeather: { current },
  } = Store();
  // console.log("hi",current.weather[0].main);
  // let main = current.weather[0].main;
  // let temp = current.temp

  let description = current?.weather[0]?.description;

  let temp = current?.temp;
  return (
    <>
      <BoxContainer
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box width={"60%"} justifyContent={"center"} alignItems={"center"}>
          {/* {current ? 
         <>
           <Text color={theme ? 'silver' : colors.white} fontWeight={"900"} fontSize={'20px'}>{description}</Text>
           <Text fontSize={'130px'} color={theme ? colors.black.inactive : colors.white} >
   
            {Math.floor(temp)} 
           
           </Text>
         </>
           :

           <>
           <Text color={theme ? 'silver' : colors.white} fontWeight={"900"} fontSize={'20px'}>{description}</Text>
          <Text fontSize={'14px'} color={theme ? colors.black.inactive : colors.white} >
  
          Fetching details...
          
          </Text></>
        }
          
          {current ?  <DegreeSybmol>
          <InnerDegreeCircle bg={theme ? 'white' : 'black'} />
         </DegreeSybmol> : null } */}

          <Text
            color={theme ? "silver" : colors.white}
            fontWeight={"900"}
            fontSize={"20px"}
          >
            {description}
          </Text>
          <Text
            fontSize={"130px"}
            color={theme ? colors.black.inactive : colors.white}
          >
            {Math.floor(temp)}
          </Text>
          <DegreeSybmol>
          <InnerDegreeCircle bg={theme ? 'white' : 'black'} />
         </DegreeSybmol>
        </Box>
      </BoxContainer>
    </>
  );
};

export default LocationStats;
