import { Platform } from "react-native";
import SegmentedControlIOS, { type SegmentedControlIOSProps } from "./SegmentedControlIOS";
import SegmentedControlAndroid, { type SegmentedControlAndroidProps } from "./SegmentedControlAndroid";

export const SegmentedControl = Platform.OS === 'android' 
                      ? SegmentedControlAndroid
                      : SegmentedControlIOS

export { 
  SegmentedControlIOS, 
  SegmentedControlAndroid,
  type SegmentedControlIOSProps, 
  type SegmentedControlAndroidProps
}

export default SegmentedControl