import { Platform } from "react-native";
import { SegmentIOS, type SegmentIOSProps } from "./SegmentIOS";
import { SegmentAndroid, type SegmentAndroidProps } from "./SegmentAndroid";
import type { SegmentProps } from "../types";

export * from './SegmentIOS'
export * from './SegmentAndroid'

export const Segment: React.FC<SegmentProps | SegmentIOSProps | SegmentAndroidProps> = (props) => {
  return (
    Platform.OS === 'android' 
          ? <SegmentAndroid {...props} />
          : <SegmentIOS {...props} />
  )
}
