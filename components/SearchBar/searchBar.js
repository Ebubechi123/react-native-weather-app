import styled from "styled-components/native"
import { CancelIcon, SearchIcon } from "../../assets/icons/icons"
import { TouchableOpacity } from "react-native"
import { colors } from "../../infrastructure/theme/colors"
import { Text } from "../Typography/typography"
import { Store } from "../../state management/context/contextStore"

const SearchBarView = styled.View`
width:100%;
margin-top: 42px;
padding-left: 23px;
padding-right: 23px;
align-items: center;
justify-content: center;
`

const SearchBarStyle = styled.View`
flex-direction: row;
justify-content: space-evenly;
align-items: center;
padding-top: 15px;
padding-bottom: 15px;
padding-left: 22px;
padding-right: 22px;
border-radius:50px;
width: 100%;
background-color:${({bg})=> bg ? bg :""};
`

const SearchIconView=styled(TouchableOpacity)`
flex:1;
`
const Input= styled.TextInput`
flex:6;
color:${colors.lightgrey};
font-size: 16px;
`
const CancelView= styled(TouchableOpacity)`
flex:0.5;
justify-content: center;
align-items: flex-end;
`


export const SearchBar =()=>{
    const {theme} = Store()
    return(
        <>
        <SearchBarView>
            <SearchBarStyle  bg ={theme ? colors.lightgrey :colors.grey }>
<SearchIconView>
    <SearchIcon color={colors.black.inactive} size={21} />
</SearchIconView>
<Input placeholder={'Search city'} placeholderTextColor={theme ?  colors.grey :colors.black.inactive} />

<CancelView>
 <CancelIcon size={14} color={theme ? colors.black.inactive :colors.lightgrey} />
</CancelView>
            </SearchBarStyle>
        </SearchBarView>
        </>
    )
}

// {"\u00B0"}