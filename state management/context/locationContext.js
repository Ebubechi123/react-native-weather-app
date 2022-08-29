import React,{useState,useEffect,createContext,useContext} from 'react';
import { GetDeviceLocation } from '../../infrastructure/utilities/functions';
const LocationContext = createContext();

export const LocationProvider = ({children})=>{
    const [deviceLocation,setDeviceLocation] = useState(null)
    const [Lat,setLat] = useState(null)
    const [Long,setLong] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
      GetDeviceLocation(Lat,Long,setLong,
        setLat,setErrorMsg);
      return ()=>{ 
       console.log(Lat&& Long)
      }
      
    }, []);
 return(
    <LocationContext.Provider value={[Lat,Long]}>
        {children}
    </LocationContext.Provider>
 )
}

export const DeviceLocation = ()=>{
    return useContext(LocationContext)
}
