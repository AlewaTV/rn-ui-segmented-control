import { StyleSheet, Text, View } from "react-native";
import type { SegmentProps, SegmentedControlStyle } from "../@types";

export interface SegmentAndroidProps extends SegmentProps {

}

export const SegmentAndroid: React.FC<SegmentAndroidProps> = (props) => {
  return (
    <View style={[styles.tabsContainerStyle]}>
      <Text>{props.label}</Text>
    </View>
  )
}

export default SegmentAndroid

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
