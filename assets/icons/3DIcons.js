import ThunderStorm from "../images/cloud2.png";
import ExtremeRain from "../images/extremeRain.png"
import FewClouds from "../images/fewClouds.png"
import HeavyIntensityRain from "../images/heavyIntensityRain.png"
import HeavyShowerSnow from "../images/heavyShowerSnow.png"
import LightRain from "../images/lightRain.png"
import LightRainSnow from "../images/lightRainSnow.png"
import LightSnow from "../images/lightSnow.png"
import Snow from "../images/snow.png"
import ScatteredClouds from "../images/scatteredClouds.png"
import ClearSky from "../images/clearSky.png"
import styled from "styled-components/native"

const Image = styled.Image`
width:${({width})=>width ? width :''};
height:${({height})=>height ? height :''};
`

export const ThunderStormIcon =({width,height,style})=>{
    return(
        <Image source={ThunderStorm} resizeMode={'contain'} style={{ ...style, width:width,height:height}}   />
    )
}
export const ClearSkyIcon =({width,height,style})=>{
    return(
        <Image source={ClearSky} resizeMode={'contain'} style={{ ...style, width:width,height:height}}   />
    )
}
export const ExtremeRainIcon =({width,height,style})=>{
    return(
        <Image source={ExtremeRain} resizeMode={'contain'} style={{ ...style, width:width,height:height}}   />
    )
}
export const FewCloudsIcon =({width,height,style})=>{
    return(
        <Image source={FewClouds} resizeMode={'contain'} style={{ ...style, width:width,height:height}}   />
    )
}
export const HeavyIntensityRainIcon =({width,height,style})=>{
    return(
        <Image source={HeavyIntensityRain} resizeMode={'contain'} style={{ ...style, width:width,height:height}}   />
    )
}
export const HeavyShowerSnowIcon =({width,height,style})=>{
    return(
        <Image source={HeavyShowerSnow} resizeMode={'contain'} style={{ ...style, width:width,height:height}}   />
    )
}
export const LightRainIcon =({width,height,style})=>{
    return(
        <Image source={LightRain} resizeMode={'contain'} style={{ ...style, width:width,height:height}}   />
    )
}
export const LightRainSnowIcon =({width,height,style})=>{
    return(
        <Image source={LightRainSnow} resizeMode={'contain'} style={{ ...style, width:width,height:height}}   />
    )
}
export const LightSnowIcon =({width,height,style})=>{
    return(
        <Image source={LightSnow} resizeMode={'contain'} style={{ ...style, width:width,height:height}}   />
    )
}
export const ScatteredCloudsIcon =({width,height,style})=>{
    return(
        <Image source={ScatteredClouds} resizeMode={'contain'} style={{ ...style, width:width,height:height}}   />
    )
}
export const SnowIcon =({width,height,style})=>{
    return(
        <Image source={Snow} resizeMode={'contain'} style={{ ...style, width:width,height:height}}   />
    )
}