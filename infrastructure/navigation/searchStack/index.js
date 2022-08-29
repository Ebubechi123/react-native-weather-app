import {  } from 'react-native'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import SearchScreen from '../../../screens/Search/SearchScreen';
import WeatherDetailsScreen from '../../../screens/weatherDetails/weatherDetailsScreen';
import { SearchBar } from 'react-native-screens';
const SearchStack = () => {
    const Stack = createNativeStackNavigator()
    return ( 
        <>
        <Stack.Navigator initialRouteName='Search Screen'>
            <Stack.Screen  options={{ headerShown: false }}   name="Search Screen" component={SearchScreen} />
            <Stack.Screen  options={{ headerShown: false }}   name="Weather Details" component={WeatherDetailsScreen} />
        </Stack.Navigator>
        </>
     );
}
 
export default SearchStack;