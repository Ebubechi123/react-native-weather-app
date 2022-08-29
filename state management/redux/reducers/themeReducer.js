import { THEME_TYPES } from "../types/types";

const initialState ={
   theme:false
}

export const ThemeReducer=(theme=initialState,{type})=>{
    switch(type){
        case THEME_TYPES.SET_DARK_MODE:
            return{theme:true};
         case THEME_TYPES.SET_LIGHT_MODE:
            return {theme:false};

            default:
            return theme

    }
}



