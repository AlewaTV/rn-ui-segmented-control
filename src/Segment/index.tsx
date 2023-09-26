import { Platform } from "react-native";
import { SegmentIOS } from "./SegmentIOS";
import { SegmentAndroid } from "./SegmentAndroid";

export const Segment = Platform.OS === 'android' 
          ? SegmentAndroid
          : SegmentIOS

export * from './SegmentIOS'
export * from './SegmentAndroid'