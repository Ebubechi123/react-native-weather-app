import styled from "styled-components/native";
import { colors } from "../../infrastructure/theme/colors";

export const LayoutStyle = styled.View`

width: 100%;
flex: 1;
justify-content: flex-start;
padding-top: 60px;
align-items: center;
background-color: ${({bg})=>bg ? bg :colors.black.dark_mode};
`;


export const UpperSection = styled.View`
width: 100%;
flex:2;
background-color: red;

`
export const LowerSection = styled.View`
width: 500px;
flex:1;
display: flex;
background-color: blue;

`