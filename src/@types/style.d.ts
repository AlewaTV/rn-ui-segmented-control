import type { ViewStyle, StyleProp, TextStyle, StyleSheetProperties } from "react-native"

export interface SegmentedControlStyle {
  tabsContainerStyle: StyleProp<ViewStyle>
  tabStyle: StyleProp<ViewStyle>,
  tabTextStyle: StyleProp<TextStyle>,
  activeTabStyle: StyleProp<ViewStyle>,
  activeTabTextStyle: StyleProp<TextStyle>,
  firstTabStyle: StyleProp<ViewStyle>,
  lastTabStyle: ViewPropTypes.styles
}