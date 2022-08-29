import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../infrastructure/theme/colors";



export const BackButtonView = styled.View`
width: 10%;
justify-content: center;
align-items: flex-start;
`

export const TitleView = styled.View`
width: 90%;
justify-content: center;
align-items: center;
`

export const SearchSecondHalfStyle =styled.View`
flex:1;
/* flex-direction: row; */
flex-wrap: wrap;
padding-top: 22px;
justify-content: center;
align-items: center;
/* background-color: antiquewhite; */
`

export const MoreCitiesView = styled(TouchableOpacity)`
width: 130px;
border-width: ${({border})=> border ? border :'2px'};
border-color: ${({borderColor})=> borderColor ? borderColor : colors.black.inactive};
border-radius: 50px;
padding: 12px;
justify-content: center;
align-items: center;
background-color: ${({bg})=>bg ? bg :''};
`