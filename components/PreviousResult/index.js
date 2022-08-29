import { View } from "react-native";
import {useNavigation} from "@react-navigation/native";
import { Text } from "../Typography/typography";
import { WeatherIconSet } from "../weatherIcons";
import { PreviousResultCard, PreviousResultView } from "./style";
import { Store } from "../../state management/context/contextStore";
import { colors } from "../../infrastructure/theme/colors";


const PreviousResults = () => {
    const data =[
        {
            city:"Abuja",
            icon:'light rain snow',
            degree:13,
            main:'Snow'
        },
        {
            city:"Lagos",
            icon:'light rain',
            degree:8,
            main:'Rain'
        },
    ]
    const navigation = useNavigation();
    const {theme} = Store()
    return ( 
        <PreviousResultView >
            {data.map(({city,icon,degree,main})=>(
                   <PreviousResultCard key={city} onPress={()=>{navigation.navigate("Weather Details",{
                    city:city
                   })}}  >
                   <Text  color={theme ?  colors.black.inactive :''} fontSize={'17px'} style={{marginBottom:12}} >{city}</Text>
                   <View>
                    {WeatherIconSet(icon,42)}
                   </View>

                    <View style={{flexDirection:'row',alignItems:"center",justifyContent:"flex-start"}} >
                    <Text  color={theme ?  colors.black.dark_mode :''} fontSize={'27px'} style={{marginRight:12}} >{degree}</Text>
                    <Text fontSize={'14px'} color={theme ?  'silver' :'#c9c9c9'}  >{main}</Text>
                    </View>
                   </PreviousResultCard>
            ))}
        </PreviousResultView>
     );
}
 
export default PreviousResults;