import { Platform, PlatformColor } from "react-native";

// const UIElementColors = [
//   "label",
//   "secondaryLabel",
//   "tertiaryLabel",
//   "quaternaryLabel",

//   "systemFill",
//   "secondarySystemFill",
//   "tertiarySystemFill",
//   "quaternarySystemFill",

//   "placeholderText",

//   "tintColor",

//   "systemBackground",
//   "secondarySystemBackground",
//   "tertiarySystemBackground",

//   "systemGroupedBackground",
//   "secondarySystemGroupedBackground",
//   "tertiarySystemGroupedBackground",

//   "separator",
//   "opaqueSeparator",

//   "link",

//   "darkText",
//   "lightText",

//   "groupTableViewBackground"
// ]

// const StandardColors = [
//   "systemBlue",
//   "systemBrown",
//   "systemCyan",
//   "systemGreen",
//   "systemIndigo",
//   "systemMint",
//   "systemOrange",
//   "systemPink",
//   "systemPurple",
//   "systemRed",
//   "systemTeal",
//   "systemYellow",
//   "systemGray",
//   "systemGray2",
//   "systemGray3",
//   "systemGray4",
//   "systemGray5",
//   "systemGray6",
//   "clear",
//   "black",
//   "blue",
//   "brown",
//   "cyan",
//   "darkGray",
//   "gray",
//   "green",
//   "lightGray",
//   "magenta",
//   "orange",
//   "purple",
//   "red",
//   "white",
//   "yellow"
// ]

export default {
  color: Platform.OS === "ios" 
    ? {
      bg: PlatformColor('systemGroupedBackground'),
      tabsContainerColor: PlatformColor('secondarySystemGroupedBackground'),
      borderColor: PlatformColor('systemFill'),
      inactiveTextColor: PlatformColor('label'),
      activeBgColor: "#3779B2",
      activeTextColor: PlatformColor('label'),
      separator: PlatformColor('separator'),
      ripple: "#053564",
      labelColor: PlatformColor('label')
    } 
    : {
      bg: "#052D56",
      tabsContainerColor: "#073E75",
      borderColor: "#3779B2",
      inactiveTextColor: "white",
      activeBgColor: "#3779B2",
      activeTextColor: "white",
      separator: "#3779B2",
      ripple: "#053564",
      labelColor: "white"
  },
  fontSize: {
    l: 20,
    m: 15,
    s: 10
  },
  spacing: {
    xs: 3,
    s: 5,
    m: 7,
    l: 10,
    xl: 15
  },
  fontFamily: {
    normal: Platform.OS === "ios" ? "Damascus" : "Roboto"
  }
};