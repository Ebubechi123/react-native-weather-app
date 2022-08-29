import styled from "styled-components/native";
import {TouchableOpacity} from 'react-native'
import { colors } from "../../infrastructure/theme/colors";

export const HomeHeaderStyle= styled.View`
width: 100%;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
padding-top: 7px;
padding-left: 23px;
padding-right: 23px;
`

export const Col1 = styled.View`
align-items: flex-start;
width: 75%;
`

export const Col2 = styled.View`
justify-content: center;
align-items: center;
width: 25%;
`

export const LocationBox=styled.View`
padding-top: 5px;
flex-direction: row;
justify-content: flex-start;
gap: 2px;
align-items: baseline;
`

export const ThemeBox=styled.View`
width: 90px;
border-radius: 100px;
border-width: 2px;
border-color: ${colors.black.inactive};
padding: 9px;
flex-direction: row;
justify-content: space-between;
`


export const IconBox = styled(TouchableOpacity)`
width: 50%;
justify-content: center;
align-items: center;
background-color: ${({bg})=>bg ? bg :''};
border-radius: 100px;
padding: 4px;
`

export const ImageContainer = styled.View`
padding-top: 20px;
/* z-index: -1; */
justify-content: center;
align-items: center;
/* background-color: blue; */
flex: 3;
`
export const BoxContainer = styled.View`
width: auto;
z-index: 1;
top: -20%;
/* background-color: green; */
`
export const Box = styled.View`
width:100%;
position: relative;
justify-content: center;
align-items: center;
`


export const HourContainer = styled.View`
/* width: auto; */
padding-left: 22px;
padding-right: 22px;
flex-direction: row;
align-items: center;
justify-content: space-around;
top: -40px;
flex: 1;
width: 100%;
/* margin-top: 30px; */
`
export const HourCard = styled.View`
width: 30%;
border-radius: 5px;
padding: 12px;
justify-content: center;
align-items: center;
`


export const DegreeSybmol = styled.View`
content: '&#176';
background-color: ${({bg})=> bg ? bg :colors.primary_color};
border-radius: ${({size})=>size ? size :'25px'};
width: ${({size})=>size ? size :'25px'};
height: ${({size})=>size ? size :'25px'};
position: absolute;
top: ${({top})=>top ? top :'50px'};
right: ${({right})=>right ? right :'30%'};
display: flex;
align-items: center;
justify-content: center;
padding: 4px;
`

export const InnerDegreeCircle = styled.View`
width:${({size})=>size ? size :'15px'};
height:${({size})=>size ? size :'15px'};
background-color: ${({bg})=> bg ? bg :''};
border-radius:${({size})=>size ? size :'15px'};
`