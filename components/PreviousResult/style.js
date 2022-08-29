import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const PreviousResultView = styled.View`
flex-direction: row;
position: relative;
justify-content: center;
align-items: center;
margin-top: 37px;
`

export const PreviousResultCard =styled(TouchableOpacity)`
justify-content: center;
align-items: center;
border-radius: 12px;
width: 160px;
padding: 18px;
margin: 5px;
background-color:#afafaf42;
`