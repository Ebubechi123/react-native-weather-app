import { useNavigation } from "@react-navigation/native";
import { BackIcon } from "../../assets/icons/icons";
import { colors } from "../../infrastructure/theme/colors";
import { HomeHeaderStyle } from "../../screens/Home/HomeStyles";
import { BackButtonView, TitleView } from "../../screens/Search/searchScreen.styles";
import { Store } from "../../state management/context/contextStore";
import { Text } from "../Typography/typography";


const Header = ({title,backbtn}) => {
    const navigate = useNavigation();
    const {theme} = Store()
    return ( 
        <HomeHeaderStyle>
        <BackButtonView>
            {backbtn ? <BackIcon onPress={()=>{navigate.goBack()}} color={theme ? colors.primary_color : colors.lightgrey} size={22} on />:null}
        </BackButtonView>
    
        <TitleView>
          <Text color={theme ? colors.black.dark_mode : colors.lightgrey} fontSize={"23px"} fontWeight={600}>
            {title}
          </Text>
        </TitleView>
      </HomeHeaderStyle>
     );
}
 
export default Header;