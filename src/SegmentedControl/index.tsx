import { Platform } from "react-native";
import { SegmentedControlIOS, type SegmentedControlIOSProps } from "./SegmentedControlIOS";
import { SegmentedControlAndroid, type SegmentedControlAndroidProps } from "./SegmentedControlAndroid";
import type { SegmentedControlRef } from "../types";
import { forwardRef } from "react";


export * from './SegmentedControlIOS'
export * from './SegmentedControlAndroid'

// @see https://blog.webdevsimplified.com/2022-06/use-imperative-handle/
export const SegmentedControl = Platform.OS === 'android' 
                        ? forwardRef<SegmentedControlRef, SegmentedControlAndroidProps>(SegmentedControlAndroid)
                        : forwardRef<SegmentedControlRef, SegmentedControlIOSProps>(SegmentedControlIOS)
