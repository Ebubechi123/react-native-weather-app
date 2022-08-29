import React from "react";
import {SafeAreaView,ScrollView, StyleSheet } from "react-native";
import { colors } from "../../infrastructure/theme/colors";
import { Store } from "../../state management/context/contextStore";
import { LayoutStyle } from "./styles";
const Globe = require('../../assets/images/world2.png')

const Layout = ({ children,bg }) => {
  const {theme} = Store();
  return (
    <>
      <LayoutStyle bg={theme ? '#fff' : colors.black.dark_mode}>
        <SafeAreaView>
        
        {children}
  
       </SafeAreaView>
      </LayoutStyle>
    </>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container:{
    width:'100%',
    flex:1,
    paddingTop:20,
    alignItems:'center',
    // backgroundColor: colors.black.dark_mode,
  },

})