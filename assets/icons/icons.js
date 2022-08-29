// Imports
import { Octicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export const HomeIcon = ({ size, color, style }) => {
  return <Octicons name="home" size={size} color={color} style={style} />;
};
export const LocationIcon = ({ size, color, style }) => {
  return <Octicons name="location" size={size} color={color} style={style} />;
};
export const SearchIcon = ({ size, color, style }) => {
  return <FontAwesome name="search" size={size} color={color} style={style} />;
};
export const CompassIcon = ({ size, color, style }) => {
  return (
    <FontAwesome5 name="compass" size={size} color={color} style={style} />
  );
};
export const UserIcon = ({ size, color, style }) => {
  return <AntDesign name="user" size={size} color={color} style={style} />;
};
export const BackIcon = ({ size, color, style,onPress }) => {
  return <Ionicons name="ios-chevron-back" size={size} color={color} style={style} onPress={onPress} />;
};

export const CancelIcon = ({ size, color, style }) => {
  return <Entypo name="cross" size={size} color={color} style={style} />;
};

