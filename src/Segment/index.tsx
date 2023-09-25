import { Platform } from "react-native";
import SegmentedIOS from "./SegmentIOS";
import SegmentedAndroid from "./SegmentAndroid";

const SegmentedControl = Platform.OS === 'ios' 
          ? SegmentedIOS
          : Platform.OS === 'android' 
          ? SegmentedAndroid
          : undefined

export default SegmentedControl