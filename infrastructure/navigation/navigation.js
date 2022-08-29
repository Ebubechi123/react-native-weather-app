import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  CompassIcon,
  HomeIcon,
  SearchIcon,
  UserIcon,
} from "../../assets/icons/icons";
import { colors } from "../theme/colors";
import HomeScreen from "../../screens/Home/HomeScreen";
import SearchScreen from "../../screens/Search/SearchScreen";
import SearchStack from "./searchStack";
import { Store } from "../../state management/context/contextStore";
const Tab = createBottomTabNavigator();
const Navigation = () => {
  const {theme} = Store();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 65,
          paddingTop: 9,
          paddingBottom: 9,
          backgroundColor: theme ? '#fff' : colors.black.dark_mode,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          keyboardHidesTabBar: true
        },
      }}
      tabBarOptions={{
        showLabel: false,
        labelStyle: { fontSize: 25 },
        activeTintColor: `${theme ? colors.black.dark_mode  :colors.active}`,
        inactiveTintColor: `${theme ? 'silver' :colors.black.inactive}`,
        keyboardHidesTabBar: true
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <HomeIcon color={color} size={21} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarIcon: ({ color }) => <SearchIcon color={color} size={21} />,
        }}
      />
      <Tab.Screen
        name="Compass"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <CompassIcon color={color} size={21} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <UserIcon color={color} size={21} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
