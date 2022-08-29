import { THEME_TYPES } from "../types/types"


export const setDarkModeAction = ()=>{
    return{
        type:THEME_TYPES.SET_DARK_MODE,
    }
}

export const setLightModeAction = ()=>{
    return{
        type:THEME_TYPES.SET_LIGHT_MODE,
    }
}

  // FUNCTION FOR THEME

  export const ToggleTheme=(theme)=>{
    return async (dispatch)=>{
     if(theme === true){
      dispatch(setDarkModeAction)
     }
     else{
      dispatch(setLightModeAction())
     }
    }
  }