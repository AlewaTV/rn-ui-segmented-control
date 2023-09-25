import { StyleSheet, Text, View } from "react-native";
import type { SegmentedControlProps, SegmentedControlStyle } from "../@types";

export interface SegmentedControlIOSProps extends SegmentedControlProps {
  
}

export const SegmentedControlIOS: React.FC<SegmentedControlIOSProps> = ({}) => {
  return (
    <View style={[styles.tabsContainerStyle]}>
      <Text>{'YO YO YO'}</Text>
    </View>
  )
}

export default SegmentedControlIOS

const styles: SegmentedControlStyle = StyleSheet.create({
  tabsContainerStyle: {

  },
  tabStyle: {

  },
  tabTextStyle: {

  },
  activeTabStyle: {

  },
  activeTabTextStyle: {

  },
  firstTabStyle: {

  },
  lastTabStyle: {

  },
})
