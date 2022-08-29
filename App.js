import { StatusBar } from "expo-status-bar";
import Navigation from "./infrastructure/navigation/navigation";
import { NavigationContainer } from "@react-navigation/native";
import { colors } from "./infrastructure/theme/colors";
import { LocationProvider } from "./state management/context/locationContext";
import { Provider, Store } from "./state management/context/contextStore";
export default function App() {
  return (
    <>
<LocationProvider>
    <Provider>
    <NavigationContainer>
     
        <Navigation/>
        <StatusBar style={ 'light'} backgroundColor={colors.black.dark_mode} />
      </NavigationContainer>
    </Provider>
     </LocationProvider>

    </>
  );
}
