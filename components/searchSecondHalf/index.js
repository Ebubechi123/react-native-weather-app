import { MoreCitiesView, SearchSecondHalfStyle } from "../../screens/Search/searchScreen.styles";
import { Text } from "../Typography/typography";
import Globe from "../../assets/images/world2.png"
import { ImageBackground, View } from "react-native";
import WeatherDetails from "../weatherInfo/weatherDetails";
import { colors } from "../../infrastructure/theme/colors";
import { Store } from "../../state management/context/contextStore";

const SearchSecondHalf = () => {
        const {theme} = Store();
    return ( 
        <>
        <SearchSecondHalfStyle>
           
        <View style={{flex:0.30,zIndex:-1,left:0,top:-112,position:'absolute',width:'100%',justifyContent:'center',alignItems:"center"}}>
        <ImageBackground source={Globe} style={{width:'99.7%',height:300,opacity: 0.2,position:'relative',right:0}}/>
        </View>
      
            <View style={{flex:1,justifyContent:'flex-start',alignItems:'center',zIndex:99,position:"relative",width:'100%'}}>
                <MoreCitiesView border={theme ?  '0px':'2px'} bg={theme ?  'silver' :'transparent'}>
                    <Text  color={theme ?  colors.black.dark_mode :'' }fontSize={"13px"} >More cities</Text>
                </MoreCitiesView>
                <WeatherDetails/>
            </View>

         
       
        </SearchSecondHalfStyle>
        
        </>
     );
}
 
export default SearchSecondHalf;

