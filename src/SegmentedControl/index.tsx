import { Platform } from "react-native";
import SegmentedControlIOS from "./SegmentedControlIOS";
import SegmentedControlAndroid from "./SegmentedControlAndroid";

const SegmentedControl = Platform.OS === 'ios' 
          ? SegmentedControlIOS
          : Platform.OS === 'android' 
          ? SegmentedControlAndroid
          : undefined

export default SegmentedControl