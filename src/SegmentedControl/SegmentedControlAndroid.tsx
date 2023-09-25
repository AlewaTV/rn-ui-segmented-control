import { StyleSheet, View } from "react-native";
import type { SegmentedControlProps, SegmentedControlStyle } from "../@types";

export interface SegmentedControlAndroidProps extends SegmentedControlProps {

}

export const SegmentedControlAndroid: React.FC<SegmentedControlAndroidProps> = () => {
  return (
    <View style={[styles.tabsContainerStyle]}>

    </View>
  )
}

export default SegmentedControlAndroid

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
