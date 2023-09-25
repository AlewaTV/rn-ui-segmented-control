import { Platform } from "react-native";
import SegmentIOS, { type SegmentIOSProps } from "./SegmentIOS";
import SegmentAndroid, { type SegmentAndroidProps } from "./SegmentAndroid";

export const Segment = Platform.OS === 'android' 
          ? SegmentAndroid
          : SegmentIOS

export { 
  SegmentIOS,
  SegmentAndroid,
  type SegmentAndroidProps, 
  type SegmentIOSProps 
}

export default Segment