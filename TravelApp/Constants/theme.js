import { Dimensions } from "react-native";
const {width, height} = Dimensions.get("window");


export const COLORS = {
    primary: "#FC6D3F", //orange
    secondary: "#CDCDD2", //Grey

    black: "#1E1F20",
    white: "#ffffff",
    blue: '#0682fe',
    gray: "#6a6a6a",

};

export const SIZES = {
    //global style
    base: 8,
    font: 18,
    radius: 30,
    padding: 10,
    padding2: 12,

   //font size
   largeTitle: 50,
   h1: 30,
   h2: 22,
   h3: 20,
   h4: 18,
   body1: 30,
   body2: 20,
   body3: 16,
   body4: 14,
   body5: 12,

   //app dimension
   width,
   height
};

export const FONTS = {
    largeTitle: {fontFamily: "Roboto-Regular", fontSize: SIZES.largeTitle, lineHeight: 40},
    h1: {fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36},
    h2: {fontFamily: "Roboto-Black", fontSize: SIZES.h2, lineHeight: 30},
    h3: {fontFamily: "Roboto-Black", fontSize: SIZES.h3, lineHeight: 22},
    h4: {fontFamily: "Roboto-Black", fontSize: SIZES.h4, lineHeight: 22},
    Body1: {fontFamily: "Roboto-Regular", fontSize: SIZES.Body1, lineHeight: 36},
    Body2: {fontFamily: "Roboto-Regular", fontSize: SIZES.Body2, lineHeight: 30},
    Body3: {fontFamily: "Roboto-Regular", fontSize: SIZES.Body3, lineHeight: 22},
    Body4: {fontFamily: "Roboto-Regular", fontSize: SIZES.Body4, lineHeight: 22},
    Body5: {fontFamily: "Roboto-Regular", fontSize: SIZES.Body5, lineHeight: 22},   
};

const appTheme = {COLORS, SIZES, FONTS};
export default appTheme;