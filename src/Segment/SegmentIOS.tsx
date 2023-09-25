import { StyleSheet, Text, View } from "react-native";
import type { SegmentProps, SegmentedControlStyle } from "../@types";

export interface SegmentIOSProps extends SegmentProps {

}

export const SegmentIOS: React.FC<SegmentIOSProps> = (props) => {
  return (
    <View style={[styles.tabsContainerStyle]}>
      <Text>{props.label}</Text>
    </View>
  )
}

export default SegmentIOS

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
