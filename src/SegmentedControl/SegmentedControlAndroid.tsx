import { StyleSheet, View } from "react-native";
import type { SegmentedControlProps } from "../@types";

export interface SegmentedControlAndroidProps extends SegmentedControlProps {

}

export const SegmentedControlAndroid: React.FC<SegmentedControlAndroidProps> = () => {
  return (
    <View style={[styles.tabsContainerStyle]}>

    </View>
  )
}

const styles = StyleSheet.create({
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
