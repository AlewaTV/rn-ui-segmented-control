import { Platform } from "react-native";
import { SegmentedControlIOS } from "./SegmentedControlIOS";
import { SegmentedControlAndroid } from "./SegmentedControlAndroid";

export const SegmentedControl = Platform.OS === 'android' 
                      ? SegmentedControlAndroid
                      : SegmentedControlIOS

export * from './SegmentedControlIOS'
export * from './SegmentedControlAndroid'