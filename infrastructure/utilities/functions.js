// FUNCTION FOR CHECKING DEVICE LOCATION
// IMPORT LOCATION LIBRARY
import * as Location from 'expo-location';
import { setDarkModeAction, setLightModeAction } from '../../state management/redux/actions/themeAction';


export const GetDeviceLocation = async (Lat,Long,setLong,
  setLat,setErrorMsg) => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }
    else{
      console.log('Permission granted')
      let location = await Location.getCurrentPositionAsync({});
      setLat(location?.coords.latitude);
      setLong(location?.coords.longitude);

    }
  };

  // FUNCTION FOR THEME

  // export const ToggleTheme=(theme)=>{
  //   return async (dispatch)=>{
  //    if(theme === true){
  //     dispatch(setDarkModeAction)
  //    }
  //    else{
  //     dispatch(setLightModeAction())
  //    }
  //   }
  // }

  export const ThemeHandler =(themeValue,setTheme,theme)=>{

    if(themeValue === false){
      setTheme(false)
    }
    else{
      setTheme(true)
    }
  }