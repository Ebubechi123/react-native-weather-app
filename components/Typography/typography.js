import styled from "styled-components/native";
import { colors } from "../../infrastructure/theme/colors";

export const Text = styled.Text`
font-size: ${({fontSize})=>fontSize ? fontSize :'16px'};
font-weight: ${({fontWeight})=>fontWeight ?fontWeight :'500'};
color:${({color})=>color ? color : colors.white};
`